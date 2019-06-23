import { Component, h, Prop, Method, State, EventEmitter, Event } from '@stencil/core';
import { ImageFieldData, ContentField } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';

@Component({
    tag: 'alaska-background-image-field',
    styleUrl: 'background-image-field-component.scss',
    shadow: true
})
export class BackgroundImageFieldComponent {

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
                return <alaska-background-image-field-default field={this.field}></alaska-background-image-field-default>;
            case 'Editing':
                return <alaska-background-image-field-editor onEdit={() => this.edit.emit()} field={this.field}></alaska-background-image-field-editor>;
            default:
                undefined;
        }
    }
}