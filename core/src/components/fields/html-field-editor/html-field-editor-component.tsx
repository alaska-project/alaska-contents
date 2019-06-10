import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { FieldData } from '../../../models/content-models';

@Component({
    tag: 'aly-html-field-editor',
    styleUrl: 'html-field-editor-component.scss',
    shadow: true
})
export class HtmlFieldEditorComponent {

    @Prop()
    field: FieldData<any>;

    @Event()
    edit: EventEmitter;

    render() {
        return (this.field ?
            <span class="field" onClick={() => this.edit.emit()}>{this.field.data.value}</span> :
            undefined);
    }
}