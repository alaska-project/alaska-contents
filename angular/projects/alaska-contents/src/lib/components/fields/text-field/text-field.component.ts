import { Component, OnInit, Input } from '@angular/core';
import { ContentField } from '@alaska-project/contents-core/dist/types/models/content-models';

@Component({
  selector: 'aly-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  @Input()
  field: ContentField<any>;

  constructor() { }

  ngOnInit() {
  }

}
