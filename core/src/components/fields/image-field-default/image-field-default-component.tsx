import { Component, h, Prop } from '@stencil/core';
import { ImageFieldData, ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-image-field-default',
    styleUrl: 'image-field-default-component.scss',
    shadow: true
})
export class ImageFieldDefaultComponent {

    @Prop()
    field: ContentField<ImageFieldData>;

    render() {
        if (!this.field || !this.field.value.url) {
            return;
        }
        return <img class={this.field.value.class} src={this.field.value.url} alt={this.field.value.alt}></img>;
    }
}