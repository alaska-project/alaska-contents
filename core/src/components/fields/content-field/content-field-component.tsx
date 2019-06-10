import { Component, Method, State, Element, h } from '@stencil/core';
import { ContentField } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';

@Component({
    tag: 'aly-content-field',
    styleUrl: 'content-field-component.scss',
    shadow: true
})
export class ContentFieldComponent {

    @Element()
    element: HTMLElement;

    @State()
    field: ContentField<any>;

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

    render() {
        if (!this.field) {
            return undefined;
        }

        return (<div>
            {this.mode === 'Default' 
                ? <aly-content-field-default field={this.createFieldData()}></aly-content-field-default>
                : <aly-content-field-editor field={this.createFieldData()}></aly-content-field-editor>
            }
        </div>
        );
    }

    private createFieldData() {
        return {
            data: this.field,
            hostElement: this.element
        };
    }
}
