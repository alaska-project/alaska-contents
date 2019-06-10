import { Component, Method, State, Prop } from '@stencil/core';
import { ContentField } from '../../../models/content-models';
import { AlaskaFields } from '../../../services/field-settings';

@Component({
    tag: 'aly-content-field-default',
    styleUrl: 'content-field-default-component.scss',
    shadow: true
})
export class ContentFieldDefaultComponent {

    @State()
    field: ContentField<any>;

    @Method()
    async setField(field: ContentField<any>) {
        this.field = field;
    }
    @Prop() propfield: any;

    render() {
        console.log(this.propfield)
        return this.propfield ?
            AlaskaFields.getFactory().createFieldRenderer(this.propfield) : 
            undefined;
    }
}
