import { Component, h, Prop, Element } from '@stencil/core';
import { LinkFieldData, ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-link-field-default',
    styleUrl: 'link-field-default-component.scss',
    shadow: true
})
export class LinkFieldDefaultComponent {

    @Element()
    element: HTMLElement;

    @Prop()
    version: string;

    @Prop()
    field: ContentField<LinkFieldData>;

    render() {
        if (!this.field || !this.field.value.url) {
            return;
        }
        return <a href={this.field.value.url} target={this.field.value.target} innerHTML={this.element.innerHTML ? this.element.innerHTML : this.field.value.text}></a>;
    }
}