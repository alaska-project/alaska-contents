import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, OnDestroy, OnChanges, Optional } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { ContentItem } from '../../../models/content-models';
import { MediaEditor } from '../../../abstractions/media-editing.interfaces';

@Component({
  selector: 'aly-media-field',
  templateUrl: './media-field.component.html',
  styleUrls: ['./media-field.component.scss']
})
export class MediaFieldComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

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
  stateChanged(){ }

  edit() {
    if (this.isEditing) {
      return;
    }
    this.isEditing = true;
    this.mediaEditor.editMedia(this.item.fields[this.field]).subscribe(media => {
      if (media) {
        this.getField().value = media;
        this.subscription.unsubscribe();
        this.subscription = this.contentEditing.updateField(this.item, this.field, this.fieldElement);
      }
      this.isEditing = false;
    });
  }

  private getField() {
    return this.item.fields[this.field];
  }
}
