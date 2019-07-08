import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { ContentField, ContentItem } from '../../../models/content-models';

@Component({
  selector: 'aly-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit, AfterViewInit, OnDestroy {

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
