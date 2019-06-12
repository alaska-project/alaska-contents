import { Component, Method, State, Element, h } from '@stencil/core';
import { ContentField } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';

@Component({
    tag: 'alaska-content-field',
    styleUrl: 'content-field-component.scss',
    shadow: true
})
export class ContentFieldComponent {

    @Element()
    element: HTMLElement;

    @State()
    field: ContentField<any>;

    private innerHtml: string;

    @Method()
    async setField(field: ContentField<any>) {
        this.field = field;
    }

    @State()
    mode: ContentMode = 'Default';

    @Method()
    async setMode(mode: ContentMode) {
        this.mode = mode;
    }

    connectedCallback() {
        this.innerHtml = this.element.innerHTML;
    }

    render() {
        if (!this.field) {
            return undefined;
        }

        return (<div>
            {this.mode === 'Default'
                ? <alaska-content-field-default field={this.field} innerHTML={this.innerHtml}></alaska-content-field-default>
                : <alaska-content-field-editor field={this.field} innerHTML={this.innerHtml}></alaska-content-field-editor>
            }
        </div>
        );
    }
}
