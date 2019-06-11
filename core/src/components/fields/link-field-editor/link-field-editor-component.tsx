import { Component, h, Prop } from '@stencil/core';
import { LinkFieldData, FieldData } from '../../../models/content-models';

@Component({
    tag: 'aly-link-field-editor',
    styleUrl: 'link-field-editor-component.scss',
    shadow: true
})
export class LinkFieldEditorComponent {

    @Prop()
    field: FieldData<LinkFieldData>;

    render() {
        if (!this.field || !this.field.data.value.url) {
            return;
        }
        return <a class="link-editor" href={this.field.data.value.url} target={this.field.data.value.target}>
            {this.field.data.value.text ?
                this.field.data.value.text :
                undefined}
        </a>;
    }
}