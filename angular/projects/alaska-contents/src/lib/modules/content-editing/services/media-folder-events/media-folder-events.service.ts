import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { FolderCreatedEvent, FolderDeletedEvent, FolderSelectedEvent, FolderReloadEvent } from 'alaska-contents/lib/modules/content-editing/services/media-folders/media-folder.models';
import { MediaContent, MediaFolder } from '../../clients/media-library.clients';
import { MediaCreatedEvent, MediaDeletedEvent, MediaSelectedEvent, MediaConfirmedEvent } from './media-folder-events.models';

@Injectable({
  providedIn: 'root'
})
export class MediaFolderEventsService {

  private folderCreated$ = new Subject<FolderCreatedEvent>();
  private folderDeleted$ = new Subject<FolderDeletedEvent>();
  private folderSelected$ = new BehaviorSubject<FolderSelectedEvent>(undefined);
  private folderReload$ = new Subject<FolderReloadEvent>();

  private mediaCreated$ = new Subject<MediaCreatedEvent>();
  private mediaDeleted$ = new Subject<MediaDeletedEvent>();
  private mediaSelected$ = new BehaviorSubject<MediaSelectedEvent>(undefined);
  private mediaConfirmed$ = new Subject<MediaConfirmedEvent>();
  private mediaDiscarded$ = new Subject();
  private mediaRemoved$ = new Subject();
  
  constructor() { }

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

  mediaSelected() {
    return this.mediaSelected$.asObservable();
  }

  mediaConfirmed() {
    return this.mediaConfirmed$.asObservable();
  }

  mediaDiscarded() {
    return this.mediaDiscarded$.asObservable();
  }

  mediaRemoved() {
    return this.mediaRemoved$.asObservable();
  }

  selectMedia(media: MediaContent) {
    this.mediaSelected$.next({
      media: media
    });
  }

  confirmMedia(media: MediaContent) {
    this.mediaConfirmed$.next({
      media: media
    });
  }

  discardMedia() {
    this.mediaDiscarded$.next();
  }

  removeMedia() {
    this.mediaRemoved$.next();
  }

  emitMediaDeleted(media: MediaContent) {
    this.mediaDeleted$.next({
      media: media
    });
  }

  emitMediaCreated(media: MediaContent, folder: MediaFolder) {
    this.mediaCreated$.next({
      media: media,
      folder: folder,
    });
  }

  emitFolderSelected(folder: MediaFolder) {
    this.folderSelected$.next({
      folder: folder
    });
  }

  emitFolderDeleted(folder: MediaFolder) {
    this.folderDeleted$.next({
      folder: folder
    });
  }

  emitFolderCreated(folder: MediaFolder, parent: MediaFolder) {
    this.folderCreated$.next({
      folder: folder,
      parent: parent,
    });
  }

  emitReloadFolder(folder: MediaFolder) {
    this.folderReload$.next({
      folder: folder
    });
  }

}
