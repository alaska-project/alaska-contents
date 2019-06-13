import { Component } from '@angular/core';
import { ContentItem } from 'projects/alaska-contents/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
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
}
