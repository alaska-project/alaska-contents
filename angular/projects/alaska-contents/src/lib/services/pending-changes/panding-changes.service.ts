import { Injectable } from '@angular/core';
import { ContentItem } from 'alaska-contents/public-api';

@Injectable({
  providedIn: 'root'
})
export class PandingChangesService {

  private pendingItems = new Map<string, ItemChanges>();

  constructor() { }

  add(item: ContentItem) {
    if (this.pendingItems[item.info.id]) {
      return;
    }
    this.pendingItems[item.info.id] = {
      itemId: item.info.id,
      originalItem: Object.assign({}, item),
      currentItem: item,
    }
  }

  clear() {
    this.pendingItems.clear();
  }

  getItemsWithChanges() {
    let itemWithChanges: ContentItem[] = [];
    this.pendingItems.forEach(element => {
      if (this.hasPendingChanges(element)) {
        itemWithChanges.push(element.currentItem);
      }
    });
    return itemWithChanges;
  }

  private hasPendingChanges(item: ItemChanges) {
    return JSON.stringify(item.currentItem) !== JSON.stringify(item.originalItem);
  }
}

export interface ItemChanges {
  itemId: string;
  originalItem: ContentItem;
  currentItem: ContentItem;
}
