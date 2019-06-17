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
                    <div class="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div class="modal-footer">
                        <button onClick={() => this.modal.close()} class="modal-close waves-effect waves-green btn-flat">Agree</button>
                    </div>
                </div>
            </div>
        );
    }

    private initializeModal(modal: HTMLElement) {
        this.modal = M.Modal.init(modal, {});
    }
}