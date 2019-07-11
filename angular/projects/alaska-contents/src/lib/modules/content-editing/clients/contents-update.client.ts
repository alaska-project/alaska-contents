import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentItem } from '@alaska-project/contents-core/dist/types/models/content-models';
import { SettingsService } from '../../contents/services/settings/settings.service';
import { formatUrl } from '../../contents/utils/url-utils';

@Injectable({
    providedIn: 'root'
})
export class ContentsUpdateClient {

    constructor(
        private http: HttpClient,
        private settingsService: SettingsService) { }

    updateContent(content: ContentItem) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/contents/updateContent');
        return this.http.post<ContentItem>(url, content);
    }

    private contentsApiEndpoint() {
        return this.settingsService.getSettings().contentsApiEndpoint;
    }
}

