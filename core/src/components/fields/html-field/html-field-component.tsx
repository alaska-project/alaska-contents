import { Component, h, Prop } from '@stencil/core';
import { ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-html-field',
    styleUrl: 'html-field-component.scss',
    shadow: true
})
export class HtmlFieldComponent {

    @Prop()
    field: ContentField<any>;

    render() {
        return this.field ? <div innerHTML={this.field.value}></div> : undefined;
    }
}