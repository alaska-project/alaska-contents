import { Component, Prop, h, Method } from '@stencil/core';
import { ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-text-field',
    styleUrl: 'text-field-component.scss',
    shadow: true
})
export class TextFieldComponent {

    @Prop()
    field: ContentField<string>;

    @Method()
    async setField(field: ContentField<string>) {
        this.field = field;
        console.log('setting field', field);
    }

    render() {
        console.log('rendering component', this.field);
        return this.field ? <div innerHTML={this.field.value}></div> : undefined;
    }
}