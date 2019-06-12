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
                ? <alaska-content-field-default field={this.createFieldData()}></alaska-content-field-default>
                : <alaska-content-field-editor field={this.createFieldData()}></alaska-content-field-editor>
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
