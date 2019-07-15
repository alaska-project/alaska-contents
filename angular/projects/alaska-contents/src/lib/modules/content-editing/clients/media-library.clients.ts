import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../../contents/services/settings/settings.service';
import { formatUrl } from '../../contents/utils/url-utils';

@Injectable({
    providedIn: 'root'
})
export class ContentsUpdateClient {

    constructor(
        private http: HttpClient,
        private settingsService: SettingsService) { }

    getRootFolders() {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/media/getRootFolders');
        return this.http.get<MediaFolder[]>(url);
    }

    getChildrenFolders(folderId: string) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/contents/getChildrenFolders', {
            folderId: folderId,
        });
        return this.http.get<MediaFolder[]>(url);
    }

    getFolderContents(folderId: string) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/contents/getFolderContents', {
            folderId: folderId,
        });
        return this.http.get<MediaContent[]>(url);
    }

    createFolder(folderName: string, parentFolderId: string) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/contents/createFolder', {
            folderName: folderName,
            parentFolderId: parentFolderId,
        });
        return this.http.post<MediaFolder>(url, undefined);
    }

    createRootFolder(folderName: string) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/contents/createRootFolder', {
            folderName: folderName,
        });
        return this.http.post<MediaFolder>(url, undefined);
    }

    deleteFolder(folderId: string) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/contents/deleteFolder', {
            folderId: folderId,
        });
        return this.http.post<MediaFolder>(url, undefined);
    }

    addMedia(media: MediaContentFile) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/contents/addMedia', {
            name: media.name,
            contentType: media.contentType,
            folderId: media.folderId,
        });
        return this.http.post<MediaContent>(url, media.mediaContent);
    }

    deleteMedia(mediaId: string) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/contents/deleteMedia', {
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
