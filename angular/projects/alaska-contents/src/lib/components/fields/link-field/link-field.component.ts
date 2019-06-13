import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { LinkFieldData, ContentField } from '@alaska-project/contents-core/dist/types/models/content-models';

@Component({
  selector: 'aly-link-field',
  templateUrl: './link-field.component.html',
  styleUrls: ['./link-field.component.scss']
})
export class LinkFieldComponent implements OnInit, AfterViewInit {

  @ViewChild('fieldElement', {static: false}) 
  fieldElement: ElementRef<HTMLAlaskaLinkFieldElement>;

  @Input()
  field: ContentField<LinkFieldData>;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.fieldElement.nativeElement.field = this.field;
  }
}
