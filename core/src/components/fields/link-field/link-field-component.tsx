import { Component, h, Prop } from '@stencil/core';
import { LinkFieldData, ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-link-field',
    styleUrl: 'link-field-component.scss',
    shadow: true
})
export class LinkFieldComponent {

    @Prop()
    field: ContentField<LinkFieldData>;

    render() {
        if (!this.field || !this.field.value.url) {
            return;
        }
        return <a href={this.field.value.url} target={this.field.value.target}>
            {this.field.value.text ?
                this.field.value.text :
                undefined}
        </a>;
    }
}