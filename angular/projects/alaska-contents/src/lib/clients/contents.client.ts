import { Injectable } from '@angular/core';
import { SettingsService } from '../services/settings/settings.service';
import { HttpClient } from '@angular/common/http';
import { formatUrl } from '../utils/url-utils';
import { ContentsSearchRequest, ContentSearchResult } from '../models/content-search-models';
import { ContentItem } from '@alaska-project/contents-core/dist/types/models/content-models';

@Injectable({
    providedIn: 'root'
})
export class ContentsClient {

    constructor(
        private http: HttpClient,
        private settingsService: SettingsService) { }

    getContents(content: ContentsSearchRequest) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/contents/getContents', content);
        return this.http.get<ContentSearchResult>(url);
    }

    updateContent(content: ContentItem) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/contents/updateContent');
        return this.http.post<ContentItem>(url, content);
    }

    private contentsApiEndpoint() {
        return this.settingsService.getSettings().contentsApiEndpoint;
    }
}

