import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { ContentField } from '@alaska-project/contents-core/dist/types/models/content-models';

@Component({
  selector: 'aly-html-field',
  templateUrl: './html-field.component.html',
  styleUrls: ['./html-field.component.scss']
})
export class HtmlFieldComponent implements OnInit, AfterViewInit {

  @ViewChild('fieldElement', {static: false}) 
  fieldElement: ElementRef<HTMLAlaskaHtmlFieldEditorElement>;

  @Input()
  field: ContentField<string>;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.fieldElement.nativeElement.field = this.field;
  }
}
