import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ContentField } from '@alaska-project/contents-core/dist/types/models/content-models';

@Component({
  selector: 'aly-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit, AfterViewInit {

  @ViewChild(HTMLAlaskaTextFieldEditorElement, {static: false}) 
  fieldElement: HTMLAlaskaTextFieldEditorElement;

  @Input()
  field: ContentField<any>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.fieldElement.field = this.field;
  }
}
