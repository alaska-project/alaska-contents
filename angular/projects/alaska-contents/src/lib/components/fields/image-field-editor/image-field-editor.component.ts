import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { ContentField, ImageFieldData } from '@alaska-project/contents-core/dist/types/models/content-models';

@Component({
  selector: 'aly-image-field-editor',
  templateUrl: './image-field-editor.component.html',
  styleUrls: ['./image-field-editor.component.scss']
})
export class ImageFieldEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('fieldElement', {static: false}) 
  fieldElement: ElementRef<HTMLAlaskaImageFieldEditorElement>;

  @Input()
  field: ContentField<ImageFieldData>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.fieldElement.nativeElement.field = this.field;
  }
}
