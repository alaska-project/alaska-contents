import { Component, h, Prop } from '@stencil/core';
import { ContentField, MediaFieldData } from '../../../models/content-models';
import { getMediaType, getExtension } from '../../../utils/utils';
import { Assets } from '../../assets/assets';

@Component({
    tag: 'alaska-media-field-default',
    styleUrl: 'media-field-default-component.scss',
    shadow: false
})
export class MediaFieldDefaultComponent {

    @Prop()
    version: string;
    
    @Prop()
    field: ContentField<MediaFieldData>;

    render() {       
        let url = this.field.value.url;
        if(!url){
            return <img class={'image-editor ' + this.field.value.class} src={Assets.noMediaContent} alt={this.field.value.alt}></img>
        } else {
            let type = getMediaType(url);
            if(type === 'image'){
                return <img class={this.field.value.class} src={url} alt={this.field.value.alt}></img>;
            } else if(type === 'video'){
                let videoType = `video/${getExtension(url)}`
                return (
                    <video muted >
                        <source src={url} type={videoType}></source>
                    </video>
                )
            } else {
                return <img class={'image-editor ' + this.field.value.class} src={Assets.unsupportedMediaContent} alt={this.field.value.alt}></img>                
            }
        }   
    }
}