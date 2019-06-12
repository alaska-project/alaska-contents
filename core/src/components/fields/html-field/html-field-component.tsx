import { Component, h, Prop } from '@stencil/core';
import { FieldData } from '../../../models/component-models';

@Component({
    tag: 'alaska-html-field',
    styleUrl: 'html-field-component.scss',
    shadow: true
})
export class HtmlFieldComponent {

    @Prop()
    field: FieldData<any>;

    render() {
        return this.field ? <div innerHTML={this.field.data.value}></div> : undefined;
    }
}