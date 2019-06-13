import { Component, OnInit, Input, OnChanges, ViewContainerRef, ViewChild } from '@angular/core';
import { ContentField } from '@alaska-project/contents-core/dist/types/models/content-models';
import { FieldFactoryService } from '../../../services/field-factory/field-factory.service';

@Component({
  selector: 'aly-content-field-default',
  templateUrl: './content-field-default.component.html',
  styleUrls: ['./content-field-default.component.scss']
})
export class ContentFieldDefaultComponent implements OnInit, OnChanges {

  @Input()
  field: ContentField<any>;

  @ViewChild('container', { static: false, read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(private fieldFactory: FieldFactoryService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    
  }

}
