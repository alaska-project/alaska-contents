import { Injectable } from '@angular/core';
import { ContentItem } from 'alaska-contents/public-api';

@Injectable({
  providedIn: 'root'
})
export class PandingChangesService {

  private pendingItems = new Map<string, ItemChanges>();

  constructor() { }

  add(item: ContentItem) {
    if (this.pendingItems.has(item.info.id)) {
      return;
    }
    this.pendingItems.set(item.info.id, {
      itemId: item.info.id,
      originalItem: this.jsonClone(item),
      currentItem: item,
    });
  }

  remove(itemId: string) {
    this.pendingItems.delete(itemId);
  }

  clear() {
    this.pendingItems.clear();
  }

  getItemsWithChanges() {
    let itemWithChanges: ContentItem[] = [];
    const keys = this.pendingItems.keys();
    for (let key of keys) {
      const item = this.pendingItems.get(key);
      if (this.hasPendingChanges(item)) {
        itemWithChanges.push(item.currentItem);
      }
    }
    return itemWithChanges;
  }

  private hasPendingChanges(item: ItemChanges) {
    return JSON.stringify(item.currentItem) !== JSON.stringify(item.originalItem);
  }

  private jsonClone(item: ContentItem) {
    return JSON.parse(JSON.stringify(item));
  }
}

export interface ItemChanges {
  itemId: string;
  originalItem: ContentItem;
  currentItem: ContentItem;
}
