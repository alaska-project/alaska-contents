import { Component, h, Prop, Method, State, EventEmitter, Event } from '@stencil/core';
import { ImageFieldData, ContentField } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';

@Component({
    tag: 'alaska-image-field',
    styleUrl: 'image-field-component.scss',
    shadow: true
})
export class ImageFieldComponent {

    @Event()
    edit: EventEmitter;
    
    @State()
    mode: ContentMode = 'Default';

    @Method()
    async setMode(mode: ContentMode) {
        this.mode = mode;
    }

    @Prop()
    field: ContentField<ImageFieldData>;

    @Method()
    async setField(field: ContentField<ImageFieldData>) {
        this.field = field;
    }
    
    render() {
        switch (this.mode) {
            case 'Default':
                return <alaska-image-field-default field={this.field}></alaska-image-field-default>;
            case 'Editing':
                return <alaska-image-field-editor onEdit={() => this.edit.emit()} field={this.field}></alaska-image-field-editor>;
            default:
                undefined;
        }
    }
}