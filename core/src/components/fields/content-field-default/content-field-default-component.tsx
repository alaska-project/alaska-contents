// import { Component, Prop, Element } from '@stencil/core';
// import { AlaskaFields } from '../../../services/field-settings';
// import { ContentField } from '../../../models/content-models';

// @Component({
//     tag: 'alaska-content-field-default',
//     styleUrl: 'content-field-default-component.scss',
//     shadow: true
// })
// export class ContentFieldDefaultComponent {

//     @Element()
//     element: HTMLElement;
    
//     @Prop() field: ContentField<any>;

//     render() {
//         return this.field ?
//             AlaskaFields.getFactory().createFieldRenderer(this.field, this.element) : 
//             undefined;
//     }
// }
