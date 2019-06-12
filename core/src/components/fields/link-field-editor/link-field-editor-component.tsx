import { Component, h, Prop, Event, Element, EventEmitter } from '@stencil/core';
import { LinkFieldData, ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-link-field-editor',
    styleUrl: 'link-field-editor-component.scss',
    shadow: true
})
export class LinkFieldEditorComponent {

    @Element()
    element: HTMLElement;

    @Prop()
    field: ContentField<LinkFieldData>;

    @Event()
    edit: EventEmitter;

    render() {
        if (!this.field || !this.field.value.url) {
            return;
        }
        return <a class="link-editor" onClick={() => this.edit.emit()} innerHTML={this.element.innerHTML}>
            {this.element.innerHTML ? undefined : this.field.value.text}
        </a>;
    }
}