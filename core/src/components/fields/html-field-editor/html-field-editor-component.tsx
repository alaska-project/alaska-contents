import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-html-field-editor',
    styleUrl: 'html-field-editor-component.scss',
    shadow: false
})
export class HtmlFieldEditorComponent {

    private modal: M.Modal;

    @Prop()
    field: ContentField<string>;

    @Event()
    edit: EventEmitter;

    render() {
        if (!this.field) {
            return;
        }
        return (
            <div>
                <div onClick={() => this.modal.open()} class="field" innerHTML={this.field.value}></div>
                <div ref={el => this.initializeModal(el)} class="modal">
                    <div class="modal-container">
                        <div class="modal-content">
                            <alaska-rich-text-editor height="100%" ref={el => this.initializeRichTextEditor(el)}></alaska-rich-text-editor>
                        </div>
                        <div class="modal-footer">
                            <button onClick={() => this.modal.close()} class="modal-close waves-effect waves-green btn-flat">Cancel</button>
                            <button onClick={() => this.modal.close()} class="modal-close waves-effect waves-green btn">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private initializeModal(modal: HTMLElement) {
        this.modal = M.Modal.init(modal, {
            startingTop: '10%',
            endingTop: '10%',
        });
    }

    private initializeRichTextEditor(editor: HTMLAlaskaRichTextEditorElement) {
        editor.initialize({
            baseURL: undefined,
            options: {
            }
        }, this.field.value);
    }
}