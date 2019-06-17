import { Component, h, Prop } from '@stencil/core';
import { ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-text-field-editor',
    styleUrl: 'text-field-editor-component.scss',
    shadow: true
})
export class TextFieldEditorComponent {

    @Prop()
    field: ContentField<string>;
    
    render() {
        if (!this.field) {
            return undefined;
        }
        return <div class="text-editor" ref={el => this.configureEditor(el)} contenteditable="true" innerHTML={this.field.value}></div>;
    }

    configureEditor(editorElement: HTMLElement) {
        editorElement.addEventListener('input', () => this.setValue(editorElement.innerHTML));
    }

    private setValue(value: string) {
        this.field.value = value;
    }
}