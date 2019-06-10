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

    render() {
        return (this.field  ? 
            <div class="field">this.field.data.value</div> : 
            undefined);
    }
}