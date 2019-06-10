import { Component, h, Prop } from '@stencil/core';
import { FieldData } from '../../../models/content-models';

@Component({
    tag: 'aly-html-field-editor',
    styleUrl: 'html-field-editor-component.scss',
    shadow: true
})
export class HtmlFieldEditorComponent {

    @Prop()
    field: FieldData<any>;

    async openRichTextEditor() {

    }

    render() {
        return (this.field  ? 
            <span class="field" onClick={() => this.openRichTextEditor()}>{this.field.data.value}</span> : 
            undefined);
    }
}