import { Component } from '@angular/core';
import { ContentItem } from 'projects/alaska-contents/src/public-api';
import { ContentEditingService } from 'projects/alaska-contents/src/lib/services/content-editing/content-editing.service';
import { ContentMode } from '../../../core/dist/types/models/component-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mode: ContentMode = 'Default';
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

  constructor(private contentEditing: ContentEditingService) {
  }

  toggleMode() {
    this.mode = this.mode === 'Default' ? 'Editing' : 'Default';
    this.contentEditing.setMode(this.mode);
  }
}
