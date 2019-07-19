import { Injectable } from '@angular/core';
import { MediaLibraryClient, MediaFolder, MediaContent } from '../../clients/media-library.clients';
import { Subject, BehaviorSubject } from 'rxjs';
import { FolderCreatedEvent, FolderDeletedEvent, FolderSelectedEvent, FolderReloadEvent, MediaCreatedEvent, MediaDeletedEvent } from './media-folder.models';
import { FileData } from '../../components/editors/media/file-selector-control/file-selector-control.models';
import { FileConverterService } from '../file-converter/file-converter.service';

@Injectable({
  providedIn: 'root'
})
export class MediaFolderService {

  private currentSelectedFolder: MediaFolder;

  private folderCreated$ = new Subject<FolderCreatedEvent>();
  private folderDeleted$ = new Subject<FolderDeletedEvent>();
  private folderSelected$ = new BehaviorSubject<FolderSelectedEvent>(undefined);
  private folderReload$ = new Subject<FolderReloadEvent>();

  private mediaCreated$ = new Subject<MediaCreatedEvent>();
  private mediaDeleted$ = new Subject<MediaDeletedEvent>();

  constructor(
    private fileConverter: FileConverterService,
    private mediaLibraryClient: MediaLibraryClient) { }

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

  mediaCreated() {
    return this.mediaCreated$.asObservable();
  }

  mediaDeleted() {
    return this.mediaDeleted$.asObservable();
  }

  async deleteMedia(media: MediaContent) {
    await this.mediaLibraryClient.deleteMedia(media.id).toPromise();
    this.mediaDeleted$.next({
      media: media
    });
  }

  async uploadMedia(content: FileData, folder: MediaFolder) {
    const fileContent = await this.fileConverter.getEncodedContent(content);
    const media = await this.mediaLibraryClient.addMedia({
      folderId: folder.id,
      name: content.name,
      contentType: this.fileConverter.getContentType(content),
      mediaContent: fileContent,
    }).toPromise();
    this.mediaCreated$.next({
      media: media,
      folder: folder,
    });
    return media;
  }

  getFolderMedia(folder: MediaFolder) {
    return this.mediaLibraryClient.getFolderContents(folder.id).toPromise();
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
