import { Component, OnInit } from '@angular/core';
import { ContentItem } from '../../../../../core/dist/types/models/content-models';

@Component({
  selector: 'app-static-item',
  templateUrl: './static-item.component.html',
  styleUrls: ['./static-item.component.scss']
})
export class StaticItemComponent implements OnInit {

  item: ContentItem = {
    info: {
      id: '',
      idPath: [],
      language: '',
      path: [],
      publishingTarget: '',
      templateId: ''
    },
    fields: {
      title: {
        type: 'string',
        value: 'Titolo'
      },
      description: {
        type: 'html',
        value: 'Hoooola <strong>simo</strong>'
      },
      image: {
        type: 'image',
        value: {
          url: 'https://source.unsplash.com/random/300x200',
          alt: 'My Image',
          class: 'my-image',
        }
      },
      cta: {
        type: 'link',
        value: {
          linkType: '',
          url: 'https://www.alpitour.it',
          target: '_blank',
          text: 'Clikkami'
        }
      }
    }
  };
  
  constructor() { }

  ngOnInit() {
  }

}
