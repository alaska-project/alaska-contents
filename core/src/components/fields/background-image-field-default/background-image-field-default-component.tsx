import { Component, h, Prop } from '@stencil/core';
import { ImageFieldData, ContentField } from '../../../models/content-models';

@Component({
    tag: 'alaska-background-image-field-default',
    styleUrl: 'background-image-field-default-component.scss',
    shadow: false
})
export class BackgroundImageFieldComponentDefault {

    @Prop()
    innerContent: string;

    @Prop()
    backgroundStyle: { [key: string]: string };

    @Prop()
    field: ContentField<ImageFieldData>;

    render() {
        if (!this.field || !this.field.value.url) {
            return;
        }
        return <div class={this.field.value.class} innerHTML={this.innerContent} style={this.backgroundStyle}></div>;
    }
}