import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { ContentItem } from '../../../models/content-models';

@Component({
  selector: 'aly-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  private subscription: Subscription;
  
  @ViewChild('fieldElement', {static: false}) 
  fieldElement: ElementRef<any>;

  @Input()
  field: string;

  @Input()
  item: ContentItem;

  constructor(private contentEditing: ContentEditingService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.subscription = this.contentEditing.updateField(this.item, this.field, this.fieldElement);
  }

  ngOnChanges(changes: any): void {
    if (changes.item && changes.item.firstChange === false) {
      this.subscription.unsubscribe();
      this.subscription = this.contentEditing.updateField(this.item, this.field, this.fieldElement);
    }
  }
}
