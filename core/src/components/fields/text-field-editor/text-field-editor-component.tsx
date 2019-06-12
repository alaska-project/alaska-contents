import { Component, h, Prop } from '@stencil/core';
import { ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-text-field-editor',
    styleUrl: 'text-field-editor-component.scss',
    shadow: true
})
export class TextFieldEditorComponent {

    private editorElement: HTMLElement;

    @Prop()
    field: ContentField<string>;

    render() {
        if (!this.field) {
            return;
        }
        return <div class="text-editor" ref={el => this.editorElement = el} contenteditable="true" innerHTML={this.field.value}></div>;
    }

    componentDidLoad() {
        this.editorElement.addEventListener('input', () => this.setValue(this.editorElement.innerHTML));
    }

    private setValue(value: string) {
        this.field.value = value;
    }
}