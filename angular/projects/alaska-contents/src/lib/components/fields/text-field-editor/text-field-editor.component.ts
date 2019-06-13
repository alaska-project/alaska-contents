import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { ContentField } from '@alaska-project/contents-core/dist/types/models/content-models';

@Component({
  selector: 'aly-text-field-editor',
  templateUrl: './text-field-editor.component.html',
  styleUrls: ['./text-field-editor.component.scss']
})
export class TextFieldEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('fieldElement', {static: false}) 
  fieldElement: ElementRef<HTMLAlaskaTextFieldEditorElement>;

  @Input()
  field: ContentField<string>;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.fieldElement.nativeElement.field = this.field;
  }
}
