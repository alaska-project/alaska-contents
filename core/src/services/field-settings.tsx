import { FieldFactory } from "./field-factory";
import { h } from "@stencil/core";

export class AlaskaFields {
    private static factory: FieldFactory;

    static getFactory() {
        if (!this.factory) {
            this.factory = this.initializeFactory();
        }
        return AlaskaFields.factory;
    }

    private static initializeFactory() {
        const factory = new FieldFactory();
        
        factory.registerFieldRenderer('string', (field) => <alaska-text-field field={field}></alaska-text-field>);
        factory.registerFieldEditor('string', (field) => <alaska-text-field-editor field={field}></alaska-text-field-editor>);

        factory.registerFieldRenderer('html', (field) => <alaska-html-field field={field}></alaska-html-field>);
        factory.registerFieldEditor('html', (field) => <alaska-html-field-editor field={field}></alaska-html-field-editor>);

        factory.registerFieldRenderer('image', (field, host) => <alaska-image-field field={field} innerHTML={host.innerHTML}></alaska-image-field>);
        factory.registerFieldEditor('image', (field, host) => <alaska-image-field-editor field={field} innerHTML={host.innerHTML}></alaska-image-field-editor>);

        factory.registerFieldRenderer('link', (field, host) => <alaska-link-field field={field} innerHTML={host.innerHTML}></alaska-link-field>);
        factory.registerFieldEditor('link', (field, host) => <alaska-link-field-editor field={field} innerHTML={host.innerHTML}></alaska-link-field-editor>);

        return factory;
    }
}
