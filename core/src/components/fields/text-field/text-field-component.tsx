import { Component, Method, State } from '@stencil/core';
import { FieldData } from '../../../models/content-models';

@Component({
    tag: 'aly-text-field',
    styleUrl: 'text-field-component.scss',
    shadow: true
})
export class TextFieldComponent {

    @State()
    field: FieldData<string>;

    @Method()
    async setField(field: FieldData<string>) {
        this.field = field;
    }

    render() {
        return this.field  ? this.field.data.value : undefined;
    }
}