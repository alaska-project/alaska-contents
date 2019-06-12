import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-html-field-editor',
    styleUrl: 'html-field-editor-component.scss',
    shadow: true
})
export class HtmlFieldEditorComponent {

    @Prop()
    field: ContentField<any>;

    @Event()
    edit: EventEmitter;

    render() {
        return (this.field ?
            <span class="field" onClick={() => this.edit.emit()}>{this.field.value}</span> :
            undefined);
    }
}