import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, Optional } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentItem } from '../../../models/content-models';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { MediaEditor } from '../../../abstractions/media-editing.interfaces';

@Component({
  selector: 'aly-background-image-field',
  templateUrl: './background-image-field.component.html',
  styleUrls: ['./background-image-field.component.scss']
})
export class BackgroundImageFieldComponent implements OnInit, OnChanges {

  private subscription: Subscription;

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

  @Input()
  repeat: boolean;

  @Input()
  position: string;

  @Input()
  size: string;

  constructor(
    private contentEditing: ContentEditingService,
    @Optional() private mediaEditor: MediaEditor) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.subscription = this.contentEditing.initializeField(this.item, this.field, this.fieldElement);
  }

  ngOnChanges(changes: any): void {
    if (changes.item && changes.item.firstChange === false) {
      this.subscription.unsubscribe();
      this.subscription = this.contentEditing.initializeField(this.item, this.field, this.fieldElement);
    }
  }

  edit() {
    this.mediaEditor.editImage(this.item.fields[this.field]);
  }
}
