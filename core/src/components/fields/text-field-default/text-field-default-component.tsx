import { Component, Prop, h } from '@stencil/core';
import { ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-text-field-default',
    styleUrl: 'text-field-default-component.scss',
    shadow: true
})
export class TextFieldDefaultComponent {

    @Prop()
    field: ContentField<string>;

    render() {
        return this.field ? <div innerHTML={this.field.value}></div> : undefined;
    }
}