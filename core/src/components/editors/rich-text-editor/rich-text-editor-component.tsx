import { Component, h, Method } from '@stencil/core';
import { randomId } from '../../../utils/utils';
import { TinyMceSettings } from '../../../models/tinymce-models';

@Component({
    tag: 'aly-rich-text-editor',
    styleUrl: 'rich-text-editor-component.scss',
    shadow: false
})
export class RichTextEditorComponent {

    private editorId = randomId();

    @Method()
    async initialize(settings: TinyMceSettings) {
        const tiny = this.getTinymce();
        if (settings.baseURL) {
            tiny.baseURL = settings.baseURL;
        }
        tiny.init({
            selector: `#${this.editorId}`,

        });
    }

    render() {
        return (
            <div class="tinymce-editor-container">
                <textarea id={this.editorId}></textarea>
            </div>);
    }

    private getTinymce() {
        const w = typeof window !== 'undefined' ? (window as any) : undefined;
        return w && w.tinyMCE ? w.tinyMCE : null;
    }
}