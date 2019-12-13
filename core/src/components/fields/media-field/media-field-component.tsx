import { Component, h, Prop, Method, State, EventEmitter, Event } from '@stencil/core';
import { ContentField, MediaFieldData } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';
import { randomId } from '../../../utils/utils';

@Component({
    tag: 'alaska-media-field',
    styleUrl: 'media-field-component.scss',
    shadow: true
})
export class MediaFieldComponent {

    @Event()
    edit: EventEmitter;

    @State()
    version: string;

    @State()
    mode: ContentMode = 'Default';

    @Method()
    async setMode(mode: ContentMode) {
        this.mode = mode;
    }

    @Prop()
    field: ContentField<MediaFieldData>;

    @Method()
    async refresh() {
        this.version = randomId();
    }
    
    @Method()
    async setField(field: ContentField<MediaFieldData>) {
        this.field = field;
    }

    @Event()
    stateChanged: EventEmitter;

    render() {
        switch (this.mode) {
            case 'Default':
                return <alaska-media-field-default version={this.version} field={this.field}></alaska-media-field-default>;
            case 'Editing':
                return <alaska-media-field-editor version={this.version} 
                onStateChanged={()=>this.stateChanged.emit()}
                onEdit={() => this.edit.emit()} 
                field={this.field}></alaska-media-field-editor>;
            default:
                undefined;
        }
    }
}