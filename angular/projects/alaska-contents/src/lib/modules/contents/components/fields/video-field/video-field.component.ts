import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy, AfterViewInit, Optional } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentItem } from '../../../models/content-models';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { MediaEditor } from '../../../abstractions/media-editing.interfaces';

@Component({
  selector: 'aly-video-field',
  templateUrl: './video-field.component.html',
  styleUrls: ['./video-field.component.scss']
})
export class VideoFieldComponent implements OnInit, AfterViewInit, OnDestroy {

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
  
  constructor(private contentEditing: ContentEditingService,
    @Optional() private mediaEditor: MediaEditor) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.subscription = this.contentEditing.updateField(this.item, this.field, this.fieldElement);
  }


  edit() {
    if (this.isEditing) {
      return;
    }
    this.isEditing = true;
    this.mediaEditor.editVideo(this.item.fields[this.field]).subscribe(video => {
      if (video) {
        this.getField().value = video;
        this.subscription.unsubscribe();
        this.subscription = this.contentEditing.updateField(this.item, this.field, this.fieldElement);
        //TODO: fix forceUpdate
        // this.fieldElement.nativeElement.setMode('Default');
        // setTimeout(() => this.fieldElement.nativeElement.setMode('Editing'));
      }
      this.isEditing = false;
    });
  }

  private getField() {
    return this.item.fields[this.field];
  }
}
