import { Injectable } from '@angular/core';
import { ContentItem } from '../../models/content-models';

@Injectable({
  providedIn: 'root'
})
export class ItemTrackerService {

  private pendingItems = new Map<string, ItemTracking>();

  constructor() { }

  trackItem(item: ContentItem) {
    if (this.pendingItems.has(item.info.id)) {
      return;
    }
    this.pendingItems.set(item.info.id, {
      itemId: item.info.id,
      currentItem: item,
      originalItem: this.jsonClone(item),
    });
  }

  removeItem(item: ContentItem) {
    
  }

  getItemWithPendingChanges() {
    return this.getTrackedItems().filter(x => this.hasPendingChanges(x));
  }

  getTrackedItems() {
    return Array.from(this.pendingItems.values());
  }

  private hasPendingChanges(itemTrack: ItemTracking) {
    return JSON.stringify(itemTrack.currentItem) !== JSON.stringify(itemTrack.originalItem);
  }

  private jsonClone(item: ContentItem) {
    return JSON.parse(JSON.stringify(item));
  }
}

export interface ItemTracking {
  itemId: string;
  originalItem: ContentItem;
  currentItem: ContentItem;
}
