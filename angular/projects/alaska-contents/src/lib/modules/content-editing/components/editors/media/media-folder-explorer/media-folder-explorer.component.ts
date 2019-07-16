import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaFolderService } from '../../../../services/media-folders/media-folder.service';
import { Subscription } from 'rxjs';
import { MediaFolder } from '../../../../clients/media-library.clients';

@Component({
  selector: 'aly-media-folder-explorer',
  templateUrl: './media-folder-explorer.component.html',
  styleUrls: ['./media-folder-explorer.component.scss']
})
export class MediaFolderExplorerComponent implements OnInit, OnDestroy {

  private folderSubscription: Subscription;
  selectedFolder: MediaFolder;
  
  constructor(private mediaFolderService: MediaFolderService) { 
  }

  ngOnInit() {
    this.folderSubscription = this.mediaFolderService.folderSelected().subscribe(x => {
      if (x) {
        this.selectedFolder = x.folder;
      }
    });
  }

  ngOnDestroy(): void {
    this.folderSubscription.unsubscribe();
  }
}
