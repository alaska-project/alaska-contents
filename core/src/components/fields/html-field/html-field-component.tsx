import { Component, Method, State, h } from '@stencil/core';
import { ContentField } from '../../../models/content-models';

@Component({
    tag: 'aly-html-field',
    styleUrl: 'html-field-component.scss',
    shadow: true
})
export class HtmlFieldComponent {

    @State()
    field: ContentField<string>;

    @Method()
    async setField(field: ContentField<string>) {
        this.field = field;
    }

    render() {
        return this.field ? <div innerHTML={this.field.value}></div> : undefined;
    }
}