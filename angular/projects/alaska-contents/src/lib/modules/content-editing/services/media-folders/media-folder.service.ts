import { Injectable } from '@angular/core';
import { MediaLibraryClient, MediaFolder } from '../../clients/media-library.clients';
import { Subject, BehaviorSubject } from 'rxjs';
import { FolderCreatedEvent, FolderDeletedEvent, FolderSelectedEvent, FolderReloadEvent } from './media-folder.models';

@Injectable({
  providedIn: 'root'
})
export class MediaFolderService {

  private currentSelectedFolder: MediaFolder;

  private folderCreated$ = new Subject<FolderCreatedEvent>();
  private folderDeleted$ = new Subject<FolderDeletedEvent>();
  private folderSelected$ = new BehaviorSubject<FolderSelectedEvent>(undefined);
  private folderReload$ = new Subject<FolderReloadEvent>();

  constructor(private mediaLibraryClient: MediaLibraryClient) { }

  folderCreated() {
    return this.folderCreated$.asObservable();
  }

  folderDeleted() {
    return this.folderDeleted$.asObservable();
  }

  folderSelected() {
    return this.folderSelected$.asObservable();
  }

  folderReloaded() {
    return this.folderReload$.asObservable();
  }

  getRootFolders() {
    return this.mediaLibraryClient.getRootFolders();
  }

  getChildrenFolders(folderId: string) {
    return this.mediaLibraryClient.getChildrenFolders(folderId);
  }

  selectFolder(folder: MediaFolder) {
    this.currentSelectedFolder = folder;
    this.folderSelected$.next({
      folder: folder
    });
  }

  reloadFolder(folder: MediaFolder) {
    this.folderReload$.next({
      folder: folder
    });
  }

  async deleteFolder(folder: MediaFolder) {
    await this.mediaLibraryClient.deleteFolder(folder.id).toPromise();
    this.folderDeleted$.next({
      folder: folder
    });
    if (this.currentSelectedFolder.id === folder.id) {
      this.selectFolder(undefined);
    }
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
    this.selectFolder(folder);
  }

  private async createChildFolder(name: string, parent: MediaFolder) {
    const folder = await this.mediaLibraryClient.createFolder(name, parent.id).toPromise();
    this.folderCreated$.next({
      folder: folder,
      parent: parent,
    });
    this.selectFolder(folder);
  }
}
