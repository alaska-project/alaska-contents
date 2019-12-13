import { Injectable } from "@angular/core";
import {
  MediaLibraryClient,
  MediaFolder,
  MediaContent
} from "../../clients/media-library.clients";
import { FileData } from "../../components/editors/media/file-selector-control/file-selector-control.models";
import { FileConverterService } from "../file-converter/file-converter.service";
import { MediaFolderEventsService } from "../media-folder-events/media-folder-events.service";

@Injectable({
  providedIn: "root"
})
export class MediaFolderService {
  private currentSelectedFolder: MediaFolder;

  constructor(
    private events: MediaFolderEventsService,
    private fileConverter: FileConverterService,
    private mediaLibraryClient: MediaLibraryClient
  ) {}

  async deleteMedia(media: MediaContent) {
    await this.mediaLibraryClient.deleteMedia(media.id).toPromise();
    this.events.emitMediaDeleted(media);
  }

  async uploadMedia(content: FileData, folder: MediaFolder) {
    const media = await this.mediaLibraryClient
      .addMediaStreamed(content, folder)
      .toPromise();
    this.events.emitMediaCreated(media, folder);
    return media;
  }

  async uploadMediaLegacy(content: FileData, folder: MediaFolder) {
    const fileContent = await this.fileConverter.getEncodedContent(content);
    const media = await this.mediaLibraryClient
      .addMedia({
        folderId: folder.id,
        name: content.name,
        contentType: this.fileConverter.getContentType(content),
        mediaContent: fileContent
      })
      .toPromise();
    this.events.emitMediaCreated(media, folder);
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
    this.events.emitFolderSelected(folder);
  }

  reloadFolder(folder: MediaFolder) {
    this.events.emitReloadFolder(folder);
  }

  async deleteFolder(folder: MediaFolder) {
    await this.mediaLibraryClient.deleteFolder(folder.id).toPromise();
    this.events.emitFolderDeleted(folder);
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
    const folder = await this.mediaLibraryClient
      .createRootFolder(name)
      .toPromise();
    this.events.emitFolderCreated(folder, undefined);
    this.selectFolder(folder);
  }

  private async createChildFolder(name: string, parent: MediaFolder) {
    const folder = await this.mediaLibraryClient
      .createFolder(name, parent.id)
      .toPromise();
    this.events.emitFolderCreated(folder, parent);
    this.selectFolder(folder);
  }
}
