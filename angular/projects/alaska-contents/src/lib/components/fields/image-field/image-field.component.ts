import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ContentField, ImageFieldData } from '@alaska-project/contents-core/dist/types/models/content-models';

@Component({
  selector: 'aly-image-field',
  templateUrl: './image-field.component.html',
  styleUrls: ['./image-field.component.scss']
})
export class ImageFieldComponent implements OnInit, AfterViewInit {

  @ViewChild('fieldElement', {static: false}) 
  fieldElement: ElementRef<HTMLAlaskaImageFieldElement>;

  @Input()
  field: ContentField<ImageFieldData>;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.fieldElement.nativeElement.field = this.field;
  }
}
