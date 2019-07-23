import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MediaContent } from '../../../../clients/media-library.clients';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaFoldersEditorService } from '../../../../services/media-folders-editor/media-folders-editor.service';
import { Subscription } from 'rxjs';
import { MediaFolderEventsService } from '../../../../services/media-folder-events/media-folder-events.service';

@Component({
  selector: 'aly-media-folder-image-item',
  templateUrl: './media-folder-image-item.component.html',
  styleUrls: ['./media-folder-image-item.component.scss']
})
export class MediaFolderImageItemComponent implements OnInit, OnDestroy {
  
  @Input()
  media: MediaContent;

  private selectedMediaSub: Subscription;
  private selectedMediaId: string;
  
  constructor(
    private domSanitizer: DomSanitizer,
    private mediaFolderEventsService: MediaFolderEventsService,
    private mediaFoldersEditorService: MediaFoldersEditorService) { }

  ngOnInit() {
    this.selectedMediaSub = this.mediaFolderEventsService.mediaSelected().subscribe(x => this.selectedMediaId = x ? x.media.id : undefined);
  }

  ngOnDestroy(): void {
    this.selectedMediaSub.unsubscribe();
  }

  getImageBackgroundUrl() {
    return this.media ?
      this.domSanitizer.bypassSecurityTrustStyle(`url('${this.media.thumbnailUrl}')`) :
      undefined;
  }

  isSelected() {
    return this.media.id === this.selectedMediaId;
  }

  selectImage() {
    this.mediaFolderEventsService.selectMedia(this.media);
  }

  delete() {
    this.mediaFoldersEditorService.deleteMedia(this.media);
  }
}
