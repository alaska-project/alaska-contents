import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, OnDestroy, OnChanges, Optional } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { ContentItem } from '../../../models/content-models';
import { MediaEditor } from '../../../abstractions/media-editing.interfaces';

@Component({
  selector: 'aly-image-field',
  templateUrl: './image-field.component.html',
  styleUrls: ['./image-field.component.scss']
})
export class ImageFieldComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  private subscription: Subscription;
  private isEditing = false;

  @ViewChild('fieldElement', { static: false })
  fieldElement: ElementRef<any>;

  @Input()
  field: string;

  @Input()
  item: ContentItem;

  @Input()
  width: string;

  @Input()
  height: string;

  constructor(
    private contentEditing: ContentEditingService,
    @Optional() private mediaEditor: MediaEditor) { }

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

  edit() {
    if (this.isEditing) {
      return;
    }
    this.isEditing = true;
    this.mediaEditor.editImage(this.item.fields[this.field]).subscribe(image => {
      if (image) {
        this.getField().value = image;
        this.subscription.unsubscribe();
        this.subscription = this.contentEditing.updateField(this.item, this.field, this.fieldElement);
        //TODO: fix forceUpdate
        this.fieldElement.nativeElement.setMode('Default');
        setTimeout(() => this.fieldElement.nativeElement.setMode('Editing'));
      }
      this.isEditing = false;
    });
  }

  private getField() {
    return this.item.fields[this.field];
  }
}
