import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { ContentItem } from '../../../models/content-models';

@Component({
  selector: 'aly-image-field',
  templateUrl: './image-field.component.html',
  styleUrls: ['./image-field.component.scss']
})
export class ImageFieldComponent implements OnInit, AfterViewInit, OnDestroy {

  private subscription: Subscription;
  
  @ViewChild('fieldElement', {static: false}) 
  fieldElement: ElementRef<any>;

  @Input()
  field: string;

  @Input()
  item: ContentItem;

  @Input()
  width: string;

  @Input()
  height: string;
  
  constructor(private contentEditing: ContentEditingService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.fieldElement.nativeElement.field = this.getField();
    this.subscription = this.contentEditing.editingMode().subscribe(x => {
      this.contentEditing.trackItem(this.item);
      this.fieldElement.nativeElement.setMode(x);
    });
  }

  private getField() {
    return this.item.fields[this.field];
  }
}
