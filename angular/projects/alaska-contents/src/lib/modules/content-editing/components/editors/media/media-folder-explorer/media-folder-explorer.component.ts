import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaFolder, MediaContent } from '../../../../clients/media-library.clients';
import { Subscription } from 'rxjs';
import { MediaFolderEventsService } from '../../../../services/media-folder-events/media-folder-events.service';

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
  
  constructor(private mediaFolderEventsService: MediaFolderEventsService) { 
  }

  ngOnInit() {
    this.folderSubscription = this.mediaFolderEventsService.folderSelected().subscribe(x => {
      this.selectedFolder = x ? x.folder : undefined;
    });
    this.mediaSubscription = this.mediaFolderEventsService.mediaSelected().subscribe(x => {
      this.selectedMedia = x ? x.media : undefined;
    });
  }

  ngOnDestroy(): void {
    this.folderSubscription.unsubscribe();
    this.mediaSubscription.unsubscribe();
  }
  
  remove() {
    this.mediaFolderEventsService.removeMedia();
  }

  cancel() {
    this.mediaFolderEventsService.discardMedia();
  }

  ok() {
    if (!this.selectedMedia) {
      return;
    }
    this.mediaFolderEventsService.confirmMedia(this.selectedMedia);
  }
}
