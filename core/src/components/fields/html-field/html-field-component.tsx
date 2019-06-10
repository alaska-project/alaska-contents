import { Component, Method, State, h } from '@stencil/core';
import { FieldData } from '../../../models/content-models';

@Component({
    tag: 'aly-html-field',
    styleUrl: 'html-field-component.scss',
    shadow: true
})
export class HtmlFieldComponent {

    @State()
    field: FieldData<any>;

    @Method()
    async setField(field: FieldData<string>) {
        this.field = field;
    }

    render() {
        return this.field ? <div innerHTML={this.field.data.value}></div> : undefined;
    }
}