import { Component, h, Prop, State } from '@stencil/core';
import { ContentField } from '../../../models/content-models';
import { ContentMode } from '../../..';

@Component({
    tag: 'alaska-html-field',
    styleUrl: 'html-field-component.scss',
    shadow: true
})
export class HtmlFieldComponent {

    @State()
    mode: ContentMode = 'Default';

    @Prop()
    field: ContentField<any>;

    render() {
        return this.field ? <div innerHTML={this.field.value}></div> : undefined;
    }
}