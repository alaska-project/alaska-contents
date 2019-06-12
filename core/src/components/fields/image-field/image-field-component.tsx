import { Component, h, Prop } from '@stencil/core';
import { ImageFieldData, FieldData } from '../../../models/content-models';

@Component({
    tag: 'alaska-image-field',
    styleUrl: 'image-field-component.scss',
    shadow: true
})
export class ImageFieldComponent {

    @Prop()
    field: FieldData<ImageFieldData>;

    render() {
        if (!this.field || !this.field.data.value.url) {
            return;
        }
        return <img class={this.field.data.value.class} src={this.field.data.value.url} alt={this.field.data.value.alt}></img>;
    }
}