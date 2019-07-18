import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../../contents/services/settings/settings.service';
import { formatUrl } from '../../contents/utils/url-utils';

@Injectable({
    providedIn: 'root'
})
export class MediaLibraryClient {

    constructor(
        private http: HttpClient,
        private settingsService: SettingsService) { }

    getRootFolders() {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/media/getRootFolders');
        return this.http.get<MediaFolder[]>(url);
    }

    getChildrenFolders(folderId: string) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/media/getChildrenFolders', {
            folderId: folderId,
        });
        return this.http.get<MediaFolder[]>(url);
    }

    getFolderContents(folderId: string) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/media/getFolderContents', {
            folderId: folderId,
        });
        return this.http.get<MediaContent[]>(url);
    }

    createFolder(folderName: string, parentFolderId: string) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/media/createFolder', {
            folderName: folderName,
            parentFolderId: parentFolderId,
        });
        return this.http.post<MediaFolder>(url, undefined);
    }

    createRootFolder(folderName: string) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/media/createRootFolder', {
            folderName: folderName,
        });
        return this.http.post<MediaFolder>(url, undefined);
    }

    deleteFolder(folderId: string) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/media/deleteFolder', {
            folderId: folderId,
        });
        return this.http.post<MediaFolder>(url, undefined);
    }

    addMedia(media: MediaContentFile) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/media/addMedia');
        return this.http.post<MediaContent>(url, <MediaCreationRequest>{
            name: media.name,
            contentType: media.contentType,
            folderId: media.folderId,
            mediaContent: media.mediaContent,
        });
    }

    deleteMedia(mediaId: string) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/media/deleteMedia', {
            mediaId: mediaId,
        });
        return this.http.post(url, undefined);
    }

    private contentsApiEndpoint() {
        return this.settingsService.getSettings().contentsApiEndpoint;
    }
}

export interface MediaContentFile {
    name: string;
    contentType: string;
    folderId: string;
    mediaContent: string;
}

export interface MediaFolder {
    id: string;
    name: string;
    path: string;
}

export interface MediaContent {
    id: string;
    name: string;
    url: string;
    thumbnailUrl: string;
    contentType: string;
}

export interface MediaCreationRequest {
    name: string;
    contentType: string;
    folderId: string;
    mediaContent: string;
}
