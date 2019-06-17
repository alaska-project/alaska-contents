import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-html-field-editor',
    styleUrl: 'html-field-editor-component.scss',
    shadow: true
})
export class HtmlFieldEditorComponent {

    @Prop()
    field: ContentField<string>;

    @Event()
    edit: EventEmitter;

    render() {
        return (this.field ?
            <div class="field" onClick={() => this.edit.emit()} innerHTML={this.field.value}></div> :
            undefined);
    }
}