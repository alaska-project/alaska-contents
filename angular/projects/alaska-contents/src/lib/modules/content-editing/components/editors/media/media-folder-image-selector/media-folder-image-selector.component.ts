import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MediaFolder, MediaContent } from '../../../../clients/media-library.clients';
import { MediaFolderService } from '../../../../services/media-folders/media-folder.service';

@Component({
  selector: 'aly-media-folder-image-selector',
  templateUrl: './media-folder-image-selector.component.html',
  styleUrls: ['./media-folder-image-selector.component.scss']
})
export class MediaFolderImageSelectorComponent implements OnInit, OnChanges {

  @Input()
  folder: MediaFolder;
  
  isLoading = false;
  contents: MediaContent[];

  constructor(private mediaFolderService: MediaFolderService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (this.folder) {
      this.loadFolderContents(this.folder);
    }
  }

  private async loadFolderContents(folder: MediaFolder) {
    this.isLoading = true;
    this.contents = await this.mediaFolderService.getFolderMedia(folder);
    this.isLoading = false;
  }
}
