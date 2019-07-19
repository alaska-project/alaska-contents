import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { MediaFolder, MediaContent } from '../../../../clients/media-library.clients';
import { MediaFolderService } from '../../../../services/media-folders/media-folder.service';
import { MediaCreatedEvent, MediaDeletedEvent } from '../../../../services/media-folders/media-folder.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aly-media-folder-image-selector',
  templateUrl: './media-folder-image-selector.component.html',
  styleUrls: ['./media-folder-image-selector.component.scss']
})
export class MediaFolderImageSelectorComponent implements OnInit, OnChanges, OnDestroy {

  private mediaCreated: Subscription;
  private mediaDeleted: Subscription;

  @Input()
  folder: MediaFolder;

  isLoading = false;
  contents: MediaContent[];

  constructor(private mediaFolderService: MediaFolderService) { }

  ngOnInit() {
    this.mediaCreated = this.mediaFolderService.mediaCreated().subscribe(x => this.handleMediaCreatedEvent(x));
    this.mediaDeleted = this.mediaFolderService.mediaDeleted().subscribe(x => this.handleMediaDeletedEvent(x));
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (this.folder) {
      this.loadFolderContents(this.folder);
    }
  }

  ngOnDestroy(): void {
    this.mediaCreated.unsubscribe();
    this.mediaDeleted.unsubscribe();
  }

  private async handleMediaCreatedEvent(event: MediaCreatedEvent) {
    if (event.folder.id === this.folder.id) {
      this.contents.unshift(event.media);
    }
  }

  private async handleMediaDeletedEvent(event: MediaDeletedEvent) {
    this.contents = this.contents.filter(x => x.id !== event.media.id);
  }

  private async loadFolderContents(folder: MediaFolder) {
    this.isLoading = true;
    this.contents = await this.mediaFolderService.getFolderMedia(folder);
    this.isLoading = false;
  }
}
