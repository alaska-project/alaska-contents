import { Component, h, Prop, State, Method } from '@stencil/core';
import { ContentField } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';

@Component({
    tag: 'alaska-html-field',
    styleUrl: 'html-field-component.scss',
    shadow: true
})
export class HtmlFieldComponent {

    @State()
    mode: ContentMode = 'Default';

    @Method()
    async setMode(mode: ContentMode) {
        this.mode = mode;
    }

    @Prop()
    field: ContentField<any>;

    @Method()
    async setField(field: ContentField<string>) {
        this.field = field;
    }

    render() {
        switch (this.mode) {
            case 'Default':
                return <alaska-html-field-default field={this.field}></alaska-html-field-default>;
            case 'Editing':
                return <alaska-html-field-editor field={this.field}></alaska-html-field-editor>;
            default:
                undefined;
        }
    }
}