import { Component, OnInit, Input } from '@angular/core';
import { MediaContent } from '../../../../clients/media-library.clients';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'aly-media-folder-image-item',
  templateUrl: './media-folder-image-item.component.html',
  styleUrls: ['./media-folder-image-item.component.scss']
})
export class MediaFolderImageItemComponent implements OnInit {

  @Input()
  media: MediaContent;
  
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getImageBackgroundUrl() {
    return this.media ?
      this.domSanitizer.bypassSecurityTrustStyle(`url('${this.media.thumbnailUrl}')`) :
      undefined;
  }
}
