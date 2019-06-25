import { Injectable } from '@angular/core';
import { SettingsService } from '../services/settings/settings.service';
import { HttpClient } from '@angular/common/http';
import { formatUrl } from '../utils/url-utils';
import { ContentsSearchRequest, ContentSearchResult } from '../models/content-search-models';

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

    updateContent() {
    }

    private contentsApiEndpoint() {
        return this.settingsService.getSettings().contentsApiEndpoint;
    }
}

