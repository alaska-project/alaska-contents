import { MediaFolder } from '../../clients/media-library.clients';

export interface FolderCreatedEvent {
    folder: MediaFolder;
    parent: MediaFolder;
}
