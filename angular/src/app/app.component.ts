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
