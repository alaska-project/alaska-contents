// import { Component, Prop, h } from '@stencil/core';


// @Component({
//     tag: 'aly-content-item',
//     styleUrl: 'content-item-component.scss',
//     shadow: true
// })
// export class ContentItemComponent {

//     private contentItem: any;

//     /**
//      * Input content id
//      */
//     @Prop() id: string;

//     /**
//      * Input language
//      */
//     @Prop() language: string;

//     /**
//      * Input publishing target
//      */
//     @Prop() target: string;

//     /**
//      * Item search depth
//      */
//     @Prop() depth: ItemSearchDepth = 'item';

//     componentWillLoad() {
//         //this.loadContent(this.createItemRequest());
//     }

//     // private createItemRequest(): ContentItemSearchRequest {
//     //     return {
//     //         id: this.id,
//     //         depth: this.depth,
//     //         publishingTarget: this.target,
//     //         language: this.language,
//     //     };
//     // }

//     // private loadContent(request: ContentItemSearchRequest) {
//     //     this.contentItemService.getItem(request)
//     //         .then(x => this.contentItem = x)
//     //         .catch(error => console.error(`Error loading item`, request, error));
//     // }

//     render() {
//         return <div>ContentId {this.id}<br /> Content name: {this.contentItem}</div>;
//     }
// }
