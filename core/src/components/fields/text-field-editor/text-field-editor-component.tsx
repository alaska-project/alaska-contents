import { Component, Method, State, h, } from '@stencil/core';
import { ContentField } from '../../../models/content-models';

@Component({
    tag: 'aly-text-field-editor',
    styleUrl: 'text-field-editor-component.scss',
    shadow: true
})
export class TextFieldEditorComponent {

    @State()
    field: ContentField<string>;

    @Method()
    async setField(field: ContentField<string>) {
        this.field = field;
    }

    render() {
        if (!this.field) {
            return;
        }
        return <input value={this.field.value}></input>;
    }
}