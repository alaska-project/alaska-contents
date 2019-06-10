import { Component, Method, State, h } from '@stencil/core';
import { LinkFieldData, FieldData } from '../../../models/content-models';

@Component({
    tag: 'aly-link-field-editor',
    styleUrl: 'link-field-editor-component.scss',
    shadow: true
})
export class LinkFieldEditorComponent {

    @State()
    field: FieldData<LinkFieldData>;

    @Method()
    async setField(field: FieldData<LinkFieldData>) {
        this.field = field;
    }

    render() {
        if (!this.field || !this.field.data.value.url) {
            return;
        }
        return <a href={this.field.data.value.url} target={this.field.data.value.target}>
            {this.field.data.value.text ?
                this.field.data.value.text :
                undefined}
        </a>;
    }
}