import { Component, OnInit, Input, OnChanges, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { ContentField } from '@alaska-project/contents-core/dist/types/models/content-models';
import { FieldFactoryService } from '../../../services/field-factory/field-factory.service';
import { ContentMode } from '@alaska-project/contents-core/dist/types/models/component-models';

@Component({
  selector: 'aly-content-field-default',
  templateUrl: './content-field-default.component.html',
  styleUrls: ['./content-field-default.component.scss']
})
export class ContentFieldDefaultComponent implements OnInit, AfterViewInit {

  @Input()
  field: ContentField<any>;

  @ViewChild('container', { static: false, read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(private fieldFactory: FieldFactoryService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (!this.field) {
      this.viewContainerRef.clear();
      return;
    }

    this.fieldFactory.renderField(this.field.type, this.getEditingMode(), this.viewContainerRef, (ref) => {
      (<any>ref.instance).field = this.field;
    });
  }

  private getEditingMode(): ContentMode {
    return 'Default';
  }
}
