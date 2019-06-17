import { Component, h, Prop, Event, Element, EventEmitter } from '@stencil/core';
import { LinkFieldData, ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-link-field-editor',
    styleUrl: 'link-field-editor-component.scss',
    shadow: false
})
export class LinkFieldEditorComponent {

    private innerHtml: string;
    // private modal: M.Modal;

    @Element()
    element: HTMLElement;

    @Prop()
    field: ContentField<LinkFieldData>;

    @Event()
    edit: EventEmitter;

    componentWillLoad() {
        this.innerHtml = this.element.innerHTML;
        this.element.innerHTML = '';
    }

    render() {
        if (!this.field) {
            return;
        }
        return (
            <div class="link-editor">
                <a onClick={() => this.edit.emit()} innerHTML={this.innerHtml ? this.innerHtml : this.field.value.text}></a>
                {/* <div ref={el => this.initializeModal(el)} class="modal">
                    <div class="modal-content">
                    </div>
                    <div class="modal-footer">
                        <button onClick={() => this.modal.close()} class="modal-close waves-effect waves-green btn-flat">Cancel</button>
                        <button onClick={() => this.saveValueAndClose()} class="modal-close waves-effect waves-green btn">Save</button>
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
}