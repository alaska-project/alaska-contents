import { Component, h } from '@stencil/core';
import { randomId } from '../../../utils/utils';

@Component({
    tag: 'aly-rich-text-editor',
    styleUrl: 'rich-text-editor-component.scss',
    shadow: false
})
export class RichTextEditorComponent {

    private editorId = randomId();

    render() {
        return (
            <div class="tinymce-editor-container">
                <textarea id={this.editorId}></textarea>
            </div>);
    }

    componentDidRender() {
        this.getTinymce().init({
            selector: `#${this.editorId}`
        });
    }

    private getTinymce() {
        const w = typeof window !== 'undefined' ? (window as any) : undefined;
        return w && w.tinyMCE ? w.tinyMCE : null;
    }
}