import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-html-field-editor',
    styleUrl: 'html-field-editor-component.scss',
    shadow: false
})
export class HtmlFieldEditorComponent {

    // private modal: M.Modal;
    // private currentValue: string;
    // private editor: HTMLAlaskaRichTextEditorElement;

    @Prop()
    version: string;
    
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
                <div onClick={() => this.edit.emit()} class="field" innerHTML={this.field.value}></div>
                {/* <div ref={el => this.initializeModal(el)} class="modal html-editor-modal">
                    <div class="modal-container">
                        <div class="modal-content">
                            <alaska-rich-text-editor onValueChanged={(event: any) => this.valueChanged(event)} height="100%" ref={el => this.initializeRichTextEditor(el)}></alaska-rich-text-editor>
                        </div>
                        <div class="modal-footer">
                            <button onClick={() => this.cancelAndClose()} class="modal-close waves-effect waves-green btn-flat">Cancel</button>
                            <button onClick={() => this.saveValueAndClose()} class="modal-close waves-effect waves-green btn">Save</button>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }

    // private initializeModal(modal: HTMLElement) {
    //     this.modal = M.Modal.init(modal, {
    //         startingTop: '10%',
    //         endingTop: '10%',
    //     });
    // }

    // private initializeRichTextEditor(editor: HTMLAlaskaRichTextEditorElement) {
    //     this.currentValue = this.field.value;
    //     editor.initialize({
    //         baseURL: undefined,
    //         options: {
    //         }
    //     }, this.field.value);
    //     this.editor = editor;
    // }

    // private valueChanged(event: any) {
    //     this.currentValue = event.detail;
    // }

    // private cancelAndClose() {
    //     this.editor.setValue(this.field.value);
    //     this.currentValue = this.field.value;
    //     this.modal.close();
    //     this.n++;
    // }

    // private saveValueAndClose() {
    //     this.field.value = this.currentValue;
    //     this.modal.close();
    //     this.n++;
    // }
}