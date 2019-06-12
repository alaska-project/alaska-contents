import { Component, Prop  } from '@stencil/core';
import { AlaskaFields } from '../../../services/field-settings';
import { FieldData } from '../../../models/component-models';

@Component({
    tag: 'alaska-content-field-editor',
    styleUrl: 'content-field-editor-component.scss',
    shadow: true
})
export class ContentFieldEditorComponent {

    @Prop() field: FieldData<any>;

    render() {
        return this.field ?
            AlaskaFields.getFactory().createFieldEditor(this.field) : 
            undefined;
    }
}
