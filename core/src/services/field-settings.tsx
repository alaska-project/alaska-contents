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
        
        factory.registerFieldRenderer('string', (field) => <aly-text-field field={field}></aly-text-field>);
        factory.registerFieldEditor('string', (field) => <aly-text-field-editor field={field}></aly-text-field-editor>);

        factory.registerFieldRenderer('html', (field) => <aly-html-field field={field}></aly-html-field>);
        factory.registerFieldEditor('html', (field) => <aly-html-field-editor field={field}></aly-html-field-editor>);

        factory.registerFieldRenderer('image', (field) => <aly-image-field field={field}></aly-image-field>);
        factory.registerFieldEditor('image', (field) => <aly-image-field-editor field={field}></aly-image-field-editor>);

        factory.registerFieldRenderer('link', (field) => <aly-link-field field={field}></aly-link-field>);
        factory.registerFieldEditor('link', (field) => <aly-link-field-editor field={field}></aly-link-field-editor>);

        return factory;
    }
}
