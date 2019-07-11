import { Injectable } from '@angular/core';
import { ContentItem } from '../../models/content-models';

@Injectable({
  providedIn: 'root'
})
export class ItemTrackerService {

  private pendingItems = new Map<string, ItemTracking>();

  constructor() { }

  addItem(item: ContentItem) {
    if (this.pendingItems.has(item.info.id)) {
      return;
    }
    this.pendingItems.set(item.info.id, this.createItemTrackingData(item));
  }

  updateItem(item: ContentItem) {
    this.pendingItems.set(item.info.id, this.createItemTrackingData(item));
  }

  removeItem(item: ContentItem) {
    if (this.pendingItems.has(item.info.id)) {
      this.pendingItems.delete(item.info.id);
    }
  }

  getItemWithPendingChanges() {
    return this.getItems().filter(x => this.hasPendingChanges(x)).map(x => x.currentItem);
  }

  getTrackedItems() {
    return this.getItems().map(x => x.currentItem);
  }

  private getItems() {
    return Array.from(this.pendingItems.values());
  }

  private createItemTrackingData(item: ContentItem) {
    return {
      itemId: item.info.id,
      currentItem: item,
      originalItem: this.jsonClone(item),
    };
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
