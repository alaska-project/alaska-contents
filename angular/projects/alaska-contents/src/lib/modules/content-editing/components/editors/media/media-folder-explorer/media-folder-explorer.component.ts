import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaFolderService } from '../../../../services/media-folders/media-folder.service';
import { Subscription } from 'rxjs';
import { MediaFolder } from '../../../../clients/media-library.clients';
import { MediaContent } from 'alaska-contents/lib/modules/content-editing/clients/media-library.clients';

@Component({
  selector: 'aly-media-folder-explorer',
  templateUrl: './media-folder-explorer.component.html',
  styleUrls: ['./media-folder-explorer.component.scss']
})
export class MediaFolderExplorerComponent implements OnInit, OnDestroy {

  private folderSubscription: Subscription;
  private mediaSubscription: Subscription;
  
  selectedFolder: MediaFolder;
  selectedMedia: MediaContent;
  
  constructor(private mediaFolderService: MediaFolderService) { 
  }

  ngOnInit() {
    this.folderSubscription = this.mediaFolderService.folderSelected().subscribe(x => {
      this.selectedFolder = x ? x.folder : undefined;
    });
    this.mediaSubscription = this.mediaFolderService.mediaSelected().subscribe(x => {
      this.selectedMedia = x ? x.media : undefined;
    });
  }

  ngOnDestroy(): void {
    this.folderSubscription.unsubscribe();
    this.mediaSubscription.unsubscribe();
  }

  cancel() {
    this.mediaFolderService.discardMedia();
  }

  ok() {
    if (!this.selectedMedia) {
      return;
    }
    this.mediaFolderService.confirmMedia(this.selectedMedia);
  }
}
