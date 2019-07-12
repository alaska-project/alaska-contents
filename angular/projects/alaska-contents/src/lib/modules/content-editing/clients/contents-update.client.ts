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

    publishContent(content: ContentItem) {
        const url = formatUrl(this.contentsApiEndpoint(), '/alaska/api/contents/publishContent');
        return this.http.post(url, this.createPublishItemRequest(content));
    }

    private createPublishItemRequest(content: ContentItem): PublishContentRequest {
        return {
            itemId: content.info.id,
            target: this.settingsService.getSettings().webContentsTarget,
            language: [content.info.language],
            scope: 'Item',
        }
    }

    private contentsApiEndpoint() {
        return this.settingsService.getSettings().contentsApiEndpoint;
    }
}

export type PublishScope = 'Item' | 'ItemAndDescendants';

export interface PublishContentRequest {
    itemId: string;
    target: string;
    language: string[];
    scope: PublishScope;
}
