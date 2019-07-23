import { Component, h, Prop, Method, State, EventEmitter, Event, Element } from '@stencil/core';
import { ImageFieldData, ContentField } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';
import { Assets } from '../../assets/assets';

@Component({
    tag: 'alaska-background-image-field',
    styleUrl: 'background-image-field-component.scss',
    shadow: true
})
export class BackgroundImageFieldComponent {

    private innerHtml: string;
    private style: {[key: string]: string};

    @Element()
    element: HTMLElement;

    @Prop()
    width: string = '100%';

    @Prop()
    height: string = '100%';

    @Prop()
    repeat: boolean = false;

    @Prop()
    position: string = 'center';

    @Prop()
    size: string = 'cover';

    @Event()
    edit: EventEmitter;

    @State()
    mode: ContentMode = 'Default';

    @Method()
    async setMode(mode: ContentMode) {
        this.mode = mode;
    }

    @Prop()
    field: ContentField<ImageFieldData>;

    @Method()
    async setField(field: ContentField<ImageFieldData>) {
        this.field = field;
    }

    componentWillLoad() {
        this.innerHtml = this.element.innerHTML;
        this.element.innerHTML = '';
    }

    componentWillRender() {
        this.style = this.field ? {
            'background-image': `url('${this.getImageUrl()}')`,
            'background-repeat': this.repeat ? 'repeat' : 'no-repeat',
            'background-size': this.size,
            'background-position': this.position,
            'width': this.width,
            'height': this.height,
        } : {};
    }

    render() {
        switch (this.mode) {
            case 'Default':
                return <alaska-background-image-field-default field={this.field} backgroundStyle={this.style} innerContent={this.innerHtml}></alaska-background-image-field-default>;
            case 'Editing':
                return <alaska-background-image-field-editor onEdit={() => this.edit.emit()} field={this.field} backgroundStyle={this.style} innerContent={this.innerHtml}></alaska-background-image-field-editor>;
            default:
                undefined;
        }
    }
    
    private getImageUrl() {
        switch (this.mode) {
            case 'Default':
                return this.field.value.url;
            case 'Editing':
                return this.field.value.url ?
                    this.field.value.url :
                    Assets.noImageContent;
        }
    }
}