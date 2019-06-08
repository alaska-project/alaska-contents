import { Component, h, Method, State } from '@stencil/core';
import { ContentField } from '../../../models/content-models';
import { HTMLFieldElement, ContentMode } from '../../../models/component-models';

@Component({
    tag: 'aly-content-field',
    styleUrl: 'content-field-component.scss',
    shadow: true
})
export class ContentFieldComponent {

    innerField?: HTMLFieldElement;

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
            return;
        }

        return this.mode === 'Default' ?
            this.renderDefaultField() :
            this.renderEditingField();
    }

    private renderDefaultField(): HTMLFieldElement {
        switch (this.field.type) {
            case 'string':
                return this.renderTextField();

        }
    }

    private renderEditingField(): HTMLFieldElement {
        switch (this.field.type) {
            case 'string':
                return this.renderEditorTextField();

        }
    }

    private renderTextField(): HTMLFieldElement {
        return <aly-text-field ref={(el) => this.setInnerField(el)}></aly-text-field>;
    }

    private renderEditorTextField(): HTMLFieldElement {
        return <aly-text-field-editor ref={(el) => this.setInnerField(el)}></aly-text-field-editor>;
    }

    private setInnerField(element: HTMLFieldElement) {
        this.innerField = element;
        if (element) {
            this.innerField.setField(this.field);
        }
    }
}
