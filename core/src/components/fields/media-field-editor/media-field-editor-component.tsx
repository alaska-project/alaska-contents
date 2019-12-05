import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { ContentField, MediaFieldData } from '../../../models/content-models';
import { Assets } from '../../assets/assets';
import { getMediaType, getExtension } from '../../../utils/utils';

@Component({
    tag: 'alaska-media-field-editor',
    styleUrl: 'media-field-editor-component.scss',
    shadow: false
})
export class MediaFieldEditorComponent {

    @Prop()
    version: string;
    
    @Prop({ mutable: true })
    field: ContentField<MediaFieldData>;

    @Event()
    edit: EventEmitter;

    @Event()
    stateChanged: EventEmitter;


    render() {
        if (!this.field) {
            return;
        }
        let url = this.field.value.url;
        if(!url){
            return <img onLoad={()=> this.updateState(10,"image")} onClick={() => this.edit.emit()} class={'image-editor ' + this.field.value.class} src={Assets.noMediaContent} alt={this.field.value.alt}></img>
        } else {
            let type = getMediaType(url);
            if(type === 'image'){                
                return <img onLoad={()=>this.updateState(10, "image")} onClick={() => this.edit.emit()} class={'image-editor ' + this.field.value.class} src={url} alt={this.field.value.alt}></img>;
            } else if(type === 'video'){                
                let videoType = `video/${getExtension(url)}`
                return (
                    <video muted 
                    onLoadedMetaData={(e: any)=> this.updateState(Math.ceil(e.target.duration),"video") } 
                    onClick={() => this.edit.emit()} class={'image-editor ' + this.field.value.class}>
                        <source src={url} type={videoType}></source>
                    </video>
                )
            } else {
                return <img onLoad={()=>this.updateState(10,"image")} onClick={() => this.edit.emit()} class={'image-editor ' + this.field.value.class} src={Assets.unsupportedMediaContent} alt={this.field.value.alt}></img>                
            }     
        }
    }    
    updateState(time: number, fieldType: string){
        if(!this.field.value.duration || this.field.value.duration === 0){
            this.field.value.duration = time;            
        }           
        this.field.type = fieldType;
        this.stateChanged.emit();      
    }
}