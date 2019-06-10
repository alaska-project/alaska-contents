import { Component, Prop } from '@stencil/core';
import { FieldData } from '../../../models/content-models';

@Component({
    tag: 'aly-text-field',
    styleUrl: 'text-field-component.scss',
    shadow: true
})
export class TextFieldComponent {

    @Prop()
    field: FieldData<string>;

    render() {
        return this.field  ? this.field.data.value : undefined;
    }
}