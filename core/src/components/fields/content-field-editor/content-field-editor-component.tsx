import { Component, Prop  } from '@stencil/core';
import { FieldData } from '../../../models/content-models';
import { AlaskaFields } from '../../../services/field-settings';

@Component({
    tag: 'aly-content-field-editor',
    styleUrl: 'content-field-editor-component.scss',
    shadow: true
})
export class ContentFieldEditorComponent {

    @Prop() field: FieldData<any>;

    render() {
        return this.field ?
            AlaskaFields.getFactory().createFieldEditor(this.field.data) : 
            undefined;
    }
}
