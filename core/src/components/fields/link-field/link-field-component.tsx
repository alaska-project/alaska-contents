import { Component, h, Prop, Element, State, Method } from '@stencil/core';
import { LinkFieldData, ContentField } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';

@Component({
    tag: 'alaska-link-field',
    styleUrl: 'link-field-component.scss',
    shadow: false
})
export class LinkFieldComponent {

    private innerHtml: string;

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

    componentWillLoad() {
        this.innerHtml = this.element.innerHTML;
        this.element.innerHTML = '';
    }

    render() {
        switch (this.mode) {
            case 'Default':
                return <alaska-link-field-default field={this.field} innerHTML={this.innerHtml}></alaska-link-field-default>;
            case 'Editing':
                return <alaska-link-field-editor field={this.field} innerHTML={this.innerHtml}></alaska-link-field-editor>;
            default:
                undefined;
        }
    }
}