import { Component, Method, State, h } from '@stencil/core';
import { ImageFieldData, FieldData } from '../../../models/content-models';

@Component({
    tag: 'aly-image-field',
    styleUrl: 'image-field-component.scss',
    shadow: true
})
export class ImageFieldComponent {

    @State()
    field: FieldData<ImageFieldData>;

    @Method()
    async setField(field: FieldData<ImageFieldData>) {
        this.field = field;
    }

    render() {
        if (!this.field || !this.field.data.value.url) {
            return;
        }
        return <img class={this.field.data.value.class} src={this.field.data.value.url} alt={this.field.data.value.alt}></img>;
    }
}