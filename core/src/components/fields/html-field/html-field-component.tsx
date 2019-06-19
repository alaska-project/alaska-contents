import { Component, h, Prop, State, Method, Event, EventEmitter } from '@stencil/core';
import { ContentField } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
    tag: 'alaska-html-field',
    styleUrl: 'html-field-component.scss',
    shadow: false
})
export class HtmlFieldComponent {

    private fieldElement: HTMLStencilElement;

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

    @Event()
    edit: EventEmitter;

    componentWillRender() {
        if (this.fieldElement) {
            this.fieldElement.forceUpdate();
        }
    }

    render() {
        switch (this.mode) {
            case 'Default':
                return <alaska-html-field-default ref={el => this.fieldElement = el} field={this.field}></alaska-html-field-default>;
            case 'Editing':
                return <alaska-html-field-editor ref={el => this.fieldElement = el} field={this.field} onEdit={() => this.triggerEditEvent()}></alaska-html-field-editor>;
            default:
                undefined;
        }
    }

    private triggerEditEvent() {
        this.edit.emit();
    }
}