import { Component, Prop, h, Method, State, Event, EventEmitter } from '@stencil/core';
import { ContentField, VideoFieldData } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';
import { Assets } from '../../assets/assets';

@Component({
    tag: 'alaska-video-field',
    styleUrl: 'video-field-component.scss',
    shadow: true
})
export class VideoFieldComponent {

    private readonly editingHeight = '300px';

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

    @Method()
    async setField(field: ContentField<VideoFieldData>) {
        this.field = field;
    }

    render() {

        if (this.mode === 'Default' && !this.field.value.url) {
            return undefined;
        }

        return <div style={{
            width: this.getWidth(),
            height: this.getHeight(),
        }}
            class={{
                'video-container': true,
                'editing': this.mode === 'Editing'
            }}>
            {this.mode === 'Editing' ? <div class="video-editor" onClick={() => this.handleClick()}></div> : ''}
            {this.field.value.url ? <alaska-video-field-youtube src={this.field.value.url}></alaska-video-field-youtube> : ''}
            {!this.field.value.url && this.mode === 'Editing' ? <img class="video-placeholder" src={Assets.noImageContent}></img> : ''}
        </div>;
    }

    private getHeight() {
        if (this.mode === 'Editing' && !this.field.value.height && !this.field.value.url) {
            return this.editingHeight;
        }
        return this.field.value.height;
    }

    private getWidth() {
        return this.field.value.width;
    }

    private handleClick() {
        if (this.mode === 'Editing') {
            console.log('edit');
            this.edit.emit();
        }
    }
}