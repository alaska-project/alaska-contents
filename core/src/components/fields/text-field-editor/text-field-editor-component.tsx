import { Component, Method, State, h, } from '@stencil/core';
import { FieldData } from '../../../models/content-models';

@Component({
    tag: 'aly-text-field-editor',
    styleUrl: 'text-field-editor-component.scss',
    shadow: true
})
export class TextFieldEditorComponent {

    @State()
    field: FieldData<string>;

    @Method()
    async setField(field: FieldData<string>) {
        this.field = field;
    }

    render() {
        if (!this.field) {
            return;
        }
        return <input value={this.field.data.value}></input>;
    }
}