import { JSX } from "@stencil/core/dist/declarations";
import { ContentField } from "../models/content-models";

export class FieldFactory {
    private readonly fieldRendererMap: FieldsMap = new FieldsMap();
    private readonly fieldEditorsMap: FieldsMap = new FieldsMap();

    createFieldEditor(field: ContentField<any>): JSX.Element {
        if (this.fieldEditorsMap.has(field.type)) {
            return this.createField(field, this.fieldEditorsMap);
        }
        return this.createFieldRenderer(field);
    }

    createFieldRenderer(field: ContentField<any>): JSX.Element {
        if (!this.fieldRendererMap.has(field.type)) {
            throw new Error(`Cannot resolve field renderer ${field.type}`);
        }
        return this.createField(field, this.fieldRendererMap);
    }

    registerFieldRenderer(fieldKey: string, fieldFactory: (field: ContentField<any>) => JSX.Element) {
        this.registerField(fieldKey, fieldFactory, this.fieldRendererMap);
    }

    registerFieldEditor(fieldKey: string, fieldFactory: (field: ContentField<any>) => JSX.Element) {
        this.registerField(fieldKey, fieldFactory, this.fieldEditorsMap);
    }

    private createField(field: ContentField<any>, map: FieldsMap) {
        const fieldInitializer = map.get(field.type);
        return fieldInitializer(field);
    }

    private registerField(fieldKey: string, fieldFactory: (field: ContentField<any>) => JSX.Element, map: FieldsMap) {
        if (map.has(fieldKey)) {
            throw new Error(`Field ${fieldKey} already registered`);
        }
        map.set(fieldKey, fieldFactory);
    }
}

export class FieldsMap extends Map<string, (field: ContentField<any>) => JSX.Element> {
}
