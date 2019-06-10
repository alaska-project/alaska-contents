import { Component, h, Prop } from '@stencil/core';
import { FieldData } from '../../../models/content-models';

@Component({
    tag: 'aly-text-field-editor',
    styleUrl: 'text-field-editor-component.scss',
    shadow: true
})
export class TextFieldEditorComponent {

    @Prop()
    field: FieldData<string>;

    render() {
        if (!this.field) {
            return;
        }
        return <input value={this.field.data.value}></input>;
    }
}