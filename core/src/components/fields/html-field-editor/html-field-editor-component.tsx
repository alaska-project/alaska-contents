import { Component, Method, State } from '@stencil/core';
import { FieldData } from '../../../models/content-models';

@Component({
    tag: 'aly-html-field-editor',
    styleUrl: 'html-field-editor-component.scss',
    shadow: true
})
export class HtmlFieldEditorComponent {

    @State()
    field: FieldData<any>;

    @Method()
    async setField(field: FieldData<any>) {
        this.field = field;
    }

    render() {
        return this.field  ? this.field.data.value : undefined;
    }
}