import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContentMode } from '@alaska-project/contents-core/dist/types/models/component-models';

@Injectable({
  providedIn: 'root'
})
export class ContentEditingService {

  private readonly contentEditingSingleton = ContentEditingService.getContentEditingService();

  constructor() { 
  }
  
  editingMode() {
    return this.contentEditingSingleton.editingMode.asObservable();
  }

  setMode(mode: ContentMode) {
    this.contentEditingSingleton.editingMode.next(mode);
  }

  private static getContentEditingService(): ContentEditingSingleton {
    const win = <any>window;
    if (!win.AlaskaContentEditing) {
      win.AlaskaContentEditing = new ContentEditingSingleton();
    }
    return win.AlaskaContentEditing;
  }
}

export class ContentEditingSingleton {
  editingMode = new BehaviorSubject<ContentMode>('Default');
}