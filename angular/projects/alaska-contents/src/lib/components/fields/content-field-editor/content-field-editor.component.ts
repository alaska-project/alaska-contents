import { Component, OnInit, Input, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { ContentField } from 'projects/alaska-contents/src/public-api';
import { FieldFactoryService } from '../../../services/field-factory/field-factory.service';
import { ContentMode } from '@alaska-project/contents-core/dist/types/models/component-models';

@Component({
  selector: 'aly-content-field-editor',
  templateUrl: './content-field-editor.component.html',
  styleUrls: ['./content-field-editor.component.scss']
})
export class ContentFieldEditorComponent implements OnInit, AfterViewInit {

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
    return 'Editing';
  }
}
