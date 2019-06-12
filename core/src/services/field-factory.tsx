import { FieldData } from '../models/component-models';
import { JSX } from "@stencil/core/dist/declarations";

export class FieldFactory {
    private readonly fieldRendererMap: FieldsMap = new FieldsMap();
    private readonly fieldEditorsMap: FieldsMap = new FieldsMap();

    createFieldEditor(field: FieldData<any>): JSX.Element {
        if (this.fieldEditorsMap.has(field.data.type)) {
            return this.createField(field, this.fieldEditorsMap);
        }
        return this.createFieldRenderer(field);
    }

    createFieldRenderer(field: FieldData<any>): JSX.Element {
        if (!this.fieldRendererMap.has(field.data.type)) {
            throw new Error(`Cannot resolve field renderer ${field.data.type}`);
        }
        return this.createField(field, this.fieldRendererMap);
    }

    registerFieldRenderer(fieldKey: string, fieldFactory: (field: FieldData<any>) => JSX.Element) {
        this.registerField(fieldKey, fieldFactory, this.fieldRendererMap);
    }

    registerFieldEditor(fieldKey: string, fieldFactory: (field: FieldData<any>) => JSX.Element) {
        this.registerField(fieldKey, fieldFactory, this.fieldEditorsMap);
    }

    private createField(field: FieldData<any>, map: FieldsMap) {
        const fieldInitializer = map.get(field.data.type);
        return fieldInitializer(field);
    }

    private registerField(fieldKey: string, fieldFactory: (field: FieldData<any>) => JSX.Element, map: FieldsMap) {
        if (map.has(fieldKey)) {
            throw new Error(`Field ${fieldKey} already registered`);
        }
        map.set(fieldKey, fieldFactory);
    }
}

export class FieldsMap extends Map<string, (field: FieldData<any>) => JSX.Element> {
}
