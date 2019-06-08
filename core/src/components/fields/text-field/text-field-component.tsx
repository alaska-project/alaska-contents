import { Component, Method, State } from '@stencil/core';
import { ContentField } from '../../../models/content-models';

@Component({
    tag: 'aly-text-field',
    styleUrl: 'text-field-component.scss',
    shadow: true
})
export class TextFieldComponent {

    @State()
    field: ContentField<string>;

    @Method()
    async setField(field: ContentField<string>) {
        this.field = field;
    }

    render() {
        return this.field  ? this.field.value : undefined;
    }
}