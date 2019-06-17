import { Component, h, Prop, Element, State, Method } from '@stencil/core';
import { LinkFieldData, ContentField } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';

@Component({
    tag: 'alaska-link-field',
    styleUrl: 'link-field-component.scss',
    shadow: true
})
export class LinkFieldComponent {

    @Element()
    element: HTMLElement;

    @State()
    mode: ContentMode = 'Default';

    @Method()
    async setMode(mode: ContentMode) {
        this.mode = mode;
    }

    @Prop()
    field: ContentField<LinkFieldData>;

    @Method()
    async setField(field: ContentField<LinkFieldData>) {
        this.field = field;
    }
    
    render() {
        switch (this.mode) {
            case 'Default':
                return <alaska-link-field-default field={this.field}></alaska-link-field-default>;
            case 'Editing':
                return <alaska-link-field-editor field={this.field}></alaska-link-field-editor>;
            default:
                undefined;
        }
    }
}