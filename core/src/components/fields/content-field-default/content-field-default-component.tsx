import { Component, Prop } from '@stencil/core';
import { FieldData } from '../../../models/content-models';
import { AlaskaFields } from '../../../services/field-settings';

@Component({
    tag: 'aly-content-field-default',
    styleUrl: 'content-field-default-component.scss',
    shadow: true
})
export class ContentFieldDefaultComponent {

    @Prop() field: FieldData<any>;

    render() {
        return this.field ?
            AlaskaFields.getFactory().createFieldRenderer(this.field.data) : 
            undefined;
    }
}
