import { Component, h, Prop, EventEmitter, Event } from '@stencil/core';
import { ImageFieldData, ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-background-image-field-editor',
    styleUrl: 'background-image-field-editor-component.scss',
    shadow: false
})
export class BackgroundImageFieldEditorComponent {

    @Prop()
    version: string;

    @Prop()
    innerContent: string;

    @Prop()
    backgroundStyle: { [key: string]: string };

    @Prop()
    field: ContentField<ImageFieldData>;

    @Event()
    edit: EventEmitter;

    render() {
        if (!this.field) {
            return;
        }
        return <div onClick={() => this.edit.emit()} class={'image-editor ' + this.field.value.class} innerHTML={this.innerContent} style={this.backgroundStyle}></div>;
    }
}