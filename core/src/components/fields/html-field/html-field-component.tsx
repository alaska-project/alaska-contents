import { Component, h, Prop, State, Method, Event, EventEmitter } from '@stencil/core';
import { ContentField } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';
import { randomId } from '../../../utils/utils';

@Component({
    tag: 'alaska-html-field',
    styleUrl: 'html-field-component.scss',
    shadow: false
})
export class HtmlFieldComponent {

    @State()
    version: string;

    @State()
    mode: ContentMode = 'Default';

    @Prop()
    field: ContentField<any>;

    @Method()
    async setMode(mode: ContentMode) {
        this.mode = mode;
    }

    @Method()
    async setField(field: ContentField<string>) {
        this.field = field;
    }

    @Method()
    async refresh() {
        this.version = randomId();
    }

    @Event()
    edit: EventEmitter;

    render() {
        switch (this.mode) {
            case 'Default':
                return <alaska-html-field-default field={this.field} version={this.version}></alaska-html-field-default>;
            case 'Editing':
                return <alaska-html-field-editor field={this.field} version={this.version} onEdit={() => this.triggerEditEvent()}></alaska-html-field-editor>;
            default:
                undefined;
        }
    }

    private triggerEditEvent() {
        this.edit.emit();
    }
}