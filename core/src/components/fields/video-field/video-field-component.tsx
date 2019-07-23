import { Component, Prop, h, Method, State, Event, EventEmitter } from '@stencil/core';
import { ContentField, VideoFieldData } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';

@Component({
    tag: 'alaska-video-field',
    styleUrl: 'video-field-component.scss',
    shadow: true
})
export class VideoFieldComponent {

    @Event()
    edit: EventEmitter;

    @State()
    mode: ContentMode = 'Default';

    @Method()
    async setMode(mode: ContentMode) {
        this.mode = mode;
    }

    @Prop()
    field: ContentField<VideoFieldData>;

    @Prop()
    width: string;

    @Prop()
    height: string;

    @Method()
    async setField(field: ContentField<VideoFieldData>) {
        this.field = field;
    }

    render() {
        return <div style={{
            width: this.width,
            height: this.height,
        }}
            class={{
                'video-container': true,
                'editing': this.mode === 'Editing'
            }}>
            {this.mode === 'Editing' ? <div class="video-editor" onClick={() => this.handleClick()}></div> : ''}
            {this.field.value.url ? <alaska-video-field-youtube src={this.field.value.url}></alaska-video-field-youtube> : ''}
        </div>;
    }

    private handleClick() {
        if (this.mode === 'Editing') {
            console.log('edit');
            this.edit.emit();
        }
    }
}