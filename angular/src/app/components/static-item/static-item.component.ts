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
          url: '',
          alt: 'My Image',
          class: 'my-image',
        }
      },
      media: {
        type: 'image',
        value: {
          url: '',
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
  item2: ContentItem = {
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
      media: {
        type: 'video',
        value: {
          url: '',
          alt: 'My Image',
          class: 'my-image',
        }
      },
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
