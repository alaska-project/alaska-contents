import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'alaska-video-field-youtube',
    styleUrl: 'video-field-youtube-component.scss',
    shadow: true
})
export class VideoFieldYoutubeComponent {

    @Prop()
    width: number;

    @Prop()
    height: number;

    @Prop()
    src: string;

    render() {
        return <iframe width="100%" height="100%" src={this.src} frameborder="0"></iframe>;
        //return <iframe width="560" height="315" src="https://www.youtube.com/embed/jgHLgdMTLH0?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
    }
}