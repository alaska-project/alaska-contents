import { Injectable } from '@angular/core';
import { ContentItem } from 'alaska-contents/public-api';

@Injectable({
  providedIn: 'root'
})
export class PandingChangesService {

  private pendingItems = new Map<string, ContentItem>();

  constructor() { }

  addItem(item: ContentItem) {
    if (this.pendingItems.has(item.info.id)) {
      return;
    }
    this.pendingItems.set(item.info.id, item);
  }

  removeItem(itemId: string) {
    this.pendingItems.delete(itemId);
  }

  clearItems() {
    this.pendingItems.clear();
  }

  getItems() {
    return Array.from(this.pendingItems.values());
  }
}

export interface ItemChanges {
  itemId: string;
  originalItem: ContentItem;
  currentItem: ContentItem;
}
