import { MediaFolder } from '../../../../clients/media-library.clients';

export interface MediaFolderTreeNode {
    value: MediaFolder;
    children: MediaFolder[];
    isLoading: boolean;
    expandable: boolean;
    level: number;
}