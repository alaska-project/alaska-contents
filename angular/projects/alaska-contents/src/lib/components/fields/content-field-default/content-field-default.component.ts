import { Component, OnInit, Input } from '@angular/core';
import { ContentField } from '@alaska-project/contents-core/dist/types/models/content-models';
import { ContentMode } from '@alaska-project/contents-core/dist/types/models/component-models';

@Component({
  selector: 'aly-content-field-default',
  templateUrl: './content-field-default.component.html',
  styleUrls: ['./content-field-default.component.scss']
})
export class ContentFieldDefaultComponent implements OnInit {

  @Input()
  field: ContentField<any>;

  constructor() { }

  ngOnInit() {
  }

}
