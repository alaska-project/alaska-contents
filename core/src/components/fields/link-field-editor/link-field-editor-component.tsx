import { Component, Method, State, h } from '@stencil/core';
import { ContentField, LinkFieldData } from '../../../models/content-models';

@Component({
    tag: 'aly-link-field-editor',
    styleUrl: 'link-field-component-editor.scss',
    shadow: true
})
export class LinkFieldEditorComponent {

    // @Element() 
    // el: HTMLElement;

    @State()
    field: ContentField<LinkFieldData>;

    @Method()
    async setField(field: ContentField<LinkFieldData>) {
        this.field = field;
    }

    render() {
        if (!this.field || !this.field.value.url) {
            return;
        }
        return <a href={this.field.value.url} target={this.field.value.target}>
            {this.field.value.text ?
                this.field.value.text :
                undefined}
        </a>;
    }
}