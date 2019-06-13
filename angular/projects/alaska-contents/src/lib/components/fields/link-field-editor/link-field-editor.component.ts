import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { ContentField, LinkFieldData } from '@alaska-project/contents-core/dist/types/models/content-models';

@Component({
  selector: 'aly-link-field-editor',
  templateUrl: './link-field-editor.component.html',
  styleUrls: ['./link-field-editor.component.scss']
})
export class LinkFieldEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('fieldElement', {static: false}) 
  fieldElement: ElementRef<HTMLAlaskaLinkFieldEditorElement>;

  @Input()
  field: ContentField<LinkFieldData>;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.fieldElement.nativeElement.field = this.field;
  }
}
