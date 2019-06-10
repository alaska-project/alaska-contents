import { Component, Method, State } from '@stencil/core';
import { ContentField } from '../../../models/content-models';
import { AlaskaFields } from '../../../services/field-settings';

@Component({
    tag: 'aly-content-field-editor',
    styleUrl: 'content-field-editor-component.scss',
    shadow: true
})
export class ContentFieldEditorComponent {

    @State()
    field: ContentField<any>;

    @Method()
    async setField(field: ContentField<any>) {
        this.field = field;
    }

    render() {
        return this.field ?
            AlaskaFields.getFactory().createFieldEditor(this.field) : 
            undefined;
    }
}
