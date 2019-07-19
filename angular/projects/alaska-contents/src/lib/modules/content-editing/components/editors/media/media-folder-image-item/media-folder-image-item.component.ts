import { Component, OnInit, Input } from '@angular/core';
import { MediaContent } from '../../../../clients/media-library.clients';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaFoldersEditorService } from '../../../../services/media-folders-editor/media-folders-editor.service';

@Component({
  selector: 'aly-media-folder-image-item',
  templateUrl: './media-folder-image-item.component.html',
  styleUrls: ['./media-folder-image-item.component.scss']
})
export class MediaFolderImageItemComponent implements OnInit {

  @Input()
  media: MediaContent;
  
  constructor(
    private domSanitizer: DomSanitizer,
    private mediaFoldersEditorService: MediaFoldersEditorService) { }

  ngOnInit() {
  }

  getImageBackgroundUrl() {
    return this.media ?
      this.domSanitizer.bypassSecurityTrustStyle(`url('${this.media.thumbnailUrl}')`) :
      undefined;
  }

  delete() {
    this.mediaFoldersEditorService.deleteMedia(this.media);
  }
}
