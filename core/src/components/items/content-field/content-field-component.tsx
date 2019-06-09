import { Component, h, Method, State } from '@stencil/core';
import { ContentField } from '../../../models/content-models';
import { HTMLFieldElement, ContentMode } from '../../../models/component-models';
import { AlaskaFields } from '../../../services/field-settings';

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

    private renderDefaultField() {
        if (!this.field) {
            return;
        }

        return AlaskaFields.getFactory().createFieldRenderer(this.field);
        // switch (this.field.type) {
        //     case 'string':
        //         return this.renderTextField();
        //     case 'html':
        //         return this.renderHtmlField();
        //     case 'image':
        //         return this.renderImageField();
        // }
    }

    private renderEditingField(): HTMLFieldElement {
        switch (this.field.type) {
            case 'string':
                return this.renderTextFieldEditor();
            case 'html':
                return this.renderHtmlFieldEditor();
            case 'image':
                return this.renderImageFieldEditor();
        }
    }

    // private renderTextField(): HTMLFieldElement {
    //     return <aly-text-field ref={(el) => this.setInnerField(el)}></aly-text-field>;
    // }

    private renderTextFieldEditor(): HTMLFieldElement {
        return <aly-text-field-editor ref={(el) => this.setInnerField(el)}></aly-text-field-editor>;
    }

    // private renderHtmlField(): HTMLFieldElement {
    //     return <aly-html-field ref={(el) => this.setInnerField(el)}></aly-html-field>;
    // }

    private renderHtmlFieldEditor(): HTMLFieldElement {
        return <aly-html-field-editor ref={(el) => this.setInnerField(el)}></aly-html-field-editor>;
    }

    // private renderImageField(): HTMLFieldElement {
    //     return <aly-image-field ref={(el) => this.setInnerField(el)}></aly-image-field>;
    // }

    private renderImageFieldEditor(): HTMLFieldElement {
        return <aly-image-field-editor ref={(el) => this.setInnerField(el)}></aly-image-field-editor>;
    }

    private setInnerField(element: HTMLFieldElement) {
        this.innerField = element;
        if (element) {
            this.innerField.setField(this.field);
        }
    }
}
