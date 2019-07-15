import { Injectable } from '@angular/core';
import { MediaLibraryClient, MediaFolder } from '../../clients/media-library.clients';
import { Subject } from 'rxjs';
import { FolderCreatedEvent } from './media-folder.models';

@Injectable({
  providedIn: 'root'
})
export class MediaFolderService {

  private folderCreated$ = new Subject<FolderCreatedEvent>();

  constructor(private mediaLibraryClient: MediaLibraryClient) { }

  getRootFolders() {
    return this.mediaLibraryClient.getRootFolders();
  }

  getChildrenFolders(folderId: string) {
    return this.mediaLibraryClient.getChildrenFolders(folderId);
  }

  async createFolder(name: string, parent: MediaFolder) {
    if (parent) {
      this.createChildFolder(name, parent);
    } else {
      this.createRootFolder(name);
    }
  }

  private async createRootFolder(name: string) {
    const folder = await this.mediaLibraryClient.createRootFolder(name).toPromise();
    this.folderCreated$.next({
      folder: folder,
      parent: undefined,
    });
  }

  private async createChildFolder(name: string, parent: MediaFolder) {
    const folder = await this.mediaLibraryClient.createFolder(name, parent.id).toPromise();
    this.folderCreated$.next({
      folder: folder,
      parent: parent,
    });
  }
}
