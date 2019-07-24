import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { ImageFieldData, ContentField } from '../../../models/content-models';
import { Assets } from '../../assets/assets';

@Component({
    tag: 'alaska-image-field-editor',
    styleUrl: 'image-field-editor-component.scss',
    shadow: false
})
export class ImageFieldEditorComponent {

    @Prop()
    version: string;
    
    @Prop()
    field: ContentField<ImageFieldData>;

    @Event()
    edit: EventEmitter;

    render() {
        if (!this.field) {
            return;
        }
        return <img onClick={() => this.edit.emit()} class={'image-editor ' + this.field.value.class} src={this.getImageUrl()} alt={this.field.value.alt}></img>;
    }

    private getImageUrl() {
        return this.field.value.url ?
            this.field.value.url :
            Assets.noImageContent;
    }
}