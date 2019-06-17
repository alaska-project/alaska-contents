import { Component, h, Prop } from '@stencil/core';
import { ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-html-field-default',
    styleUrl: 'html-field-default-component.scss',
    shadow: true
})
export class HtmlFieldDefaultComponent {

    @Prop()
    field: ContentField<string>;

    render() {
        return this.field ? <div innerHTML={this.field.value}></div> : undefined;
    }
}