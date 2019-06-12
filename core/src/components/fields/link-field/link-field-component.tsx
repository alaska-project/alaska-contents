import { Component, h, Prop } from '@stencil/core';
import { LinkFieldData, FieldData } from '../../../models/content-models';

@Component({
    tag: 'alaska-link-field',
    styleUrl: 'link-field-component.scss',
    shadow: true
})
export class LinkFieldComponent {

    @Prop()
    field: FieldData<LinkFieldData>;

    render() {
        if (!this.field || !this.field.data.value.url) {
            return;
        }
        return <a href={this.field.data.value.url} target={this.field.data.value.target}>
            {this.field.data.value.text ?
                this.field.data.value.text :
                undefined}
        </a>;
    }
}