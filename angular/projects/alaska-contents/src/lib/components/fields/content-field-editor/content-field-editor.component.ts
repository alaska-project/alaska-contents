import { Component, OnInit, Input } from '@angular/core';
import { ContentField } from 'projects/alaska-contents/src/public-api';

@Component({
  selector: 'aly-content-field-editor',
  templateUrl: './content-field-editor.component.html',
  styleUrls: ['./content-field-editor.component.scss']
})
export class ContentFieldEditorComponent implements OnInit {

  @Input()
  field: ContentField<any>;

  constructor() { }

  ngOnInit() {
  }

}
