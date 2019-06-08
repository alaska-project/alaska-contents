import { Component, Method, State, h } from '@stencil/core';
import { ContentField, ImageFieldData } from '../../../models/content-models';

@Component({
    tag: 'aly-image-field',
    styleUrl: 'image-field-component.scss',
    shadow: true
})
export class ImageFieldComponent {

    @State()
    field: ContentField<ImageFieldData>;

    @Method()
    async setField(field: ContentField<ImageFieldData>) {
        this.field = field;
    }

    render() {
        if (!this.field || !this.field.value.url) {
            return;
        }
        return <img class={this.field.value.class} src={this.field.value.url} alt={this.field.value.alt}></img>;
    }
}