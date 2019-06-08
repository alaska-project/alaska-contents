import { Component, Method, State } from '@stencil/core';
import { ContentField } from '../../../models/content-models';

@Component({
    tag: 'aly-html-field-editor',
    styleUrl: 'html-field-editor-component.scss',
    shadow: true
})
export class HtmlFieldEditorComponent {

    @State()
    field: ContentField<string>;

    @Method()
    async setField(field: ContentField<string>) {
        this.field = field;
    }

    render() {
        return this.field  ? this.field.value : undefined;
    }
}