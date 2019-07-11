// import { Injectable } from '@angular/core';
// import { ContentItem } from 'alaska-contents/public-api';

// @Injectable({
//   providedIn: 'root'
// })
// export class PandingChangesService {

//   private pendingItems = new Map<string, ItemChanges>();

//   constructor() { }

//   addItem(item: ContentItem) {
//     if (this.pendingItems.has(item.info.id)) {
//       return;
//     }
//     this.pendingItems.set(item.info.id, item);
//   }

//   updateItem(item: ContentItem) {
//     this.pendingItems.set(item.info.id, item);
//   }

//   removeItem(item: ContentItem) {
//     if (this.pendingItems.has(item.info.id)) {
//       this.pendingItems.delete(item.info.id);
//     }
//   }

//   clearItems() {
//     this.pendingItems.clear();
//   }

//   getItems() {
//     return Array.from(this.pendingItems.values());
//   }
// }

// export interface ItemChanges {
//   itemId: string;
//   originalItem: ContentItem;
//   currentItem: ContentItem;
// }
