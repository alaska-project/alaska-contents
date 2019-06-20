import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { ImageFieldData, ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-image-field-editor',
    styleUrl: 'image-field-editor-component.scss',
    shadow: false
})
export class ImageFieldEditorComponent {

    @Prop()
    field: ContentField<ImageFieldData>;

    @Event()
    edit: EventEmitter;

    render() {
        if (!this.field || !this.field.value.url) {
            return;
        }
        return <img onClick={() => this.edit.emit()} class={'image-editor ' + this.field.value.class} src={this.field.value.url} alt={this.field.value.alt}></img>;
    }
}