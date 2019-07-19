import { MediaFolder, MediaContent } from '../../clients/media-library.clients';

export interface FolderCreatedEvent {
    folder: MediaFolder;
    parent: MediaFolder;
}

export interface FolderDeletedEvent {
    folder: MediaFolder;
}

export interface FolderSelectedEvent {
    folder: MediaFolder;
}

export interface FolderReloadEvent {
    folder: MediaFolder;
}

export interface MediaCreatedEvent {
    media: MediaContent;
    folder: MediaFolder;
}

export interface MediaDeletedEvent {
    media: MediaContent;
}