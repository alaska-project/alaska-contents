import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { LinkFieldData, FieldData } from '../../../models/content-models';

@Component({
    tag: 'alaska-link-field-editor',
    styleUrl: 'link-field-editor-component.scss',
    shadow: true
})
export class LinkFieldEditorComponent {

    @Prop()
    field: FieldData<LinkFieldData>;

    @Event()
    edit: EventEmitter;

    render() {
        if (!this.field || !this.field.data.value.url) {
            return;
        }
        return <a class="link-editor" onClick={() => this.edit.emit()}>
            {this.field.data.value.text ?
                this.field.data.value.text :
                undefined}
        </a>;
    }
}