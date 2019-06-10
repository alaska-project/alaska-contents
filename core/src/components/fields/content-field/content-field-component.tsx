import { Component, Method, State, h } from '@stencil/core';
import { ContentField } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';

@Component({
    tag: 'aly-content-field',
    styleUrl: 'content-field-component.scss',
    shadow: true
})
export class ContentFieldComponent {

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
            <aly-content-field-default hidden={this.mode !== 'Default'} ref={(el) => el.setField(this.field)}></aly-content-field-default>
            <aly-content-field-editor hidden={this.mode !== 'Editing'} ref={(el) => el.setField(this.field)}></aly-content-field-editor>
        </div>
        );
    }
}
