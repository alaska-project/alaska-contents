import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { ImageFieldData } from '../../../models/content-models';
import { FieldData } from '../../../models/component-models';

@Component({
    tag: 'alaska-image-field-editor',
    styleUrl: 'image-field-editor-component.scss',
    shadow: true
})
export class ImageFieldEditorComponent {

    @Prop()
    field: FieldData<ImageFieldData>;

    @Event()
    edit: EventEmitter;

    render() {
        if (!this.field || !this.field.data.value.url) {
            return;
        }
        return <img onClick={() => this.edit.emit()} class={'image-editor ' + this.field.data.value.class} src={this.field.data.value.url} alt={this.field.data.value.alt}></img>;
    }
}