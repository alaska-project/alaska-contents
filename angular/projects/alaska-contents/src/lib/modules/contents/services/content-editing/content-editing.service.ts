import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SettingsService } from '../settings/settings.service';
import { ContentMode } from '../../models/context-models';
import { ContentItem } from '@alaska-project/contents-core/dist/types/models/content-models';
import { ItemTrackerService } from '../item-tracker/item-tracker.service';

@Injectable({
  providedIn: 'root'
})
export class ContentEditingService {

  private readonly contentEditingSingleton = ContentEditingService.getContentEditingService();
  constructor(
    private itemTracker: ItemTrackerService,
    private settingsService: SettingsService) {
  }

  initializeField(item: ContentItem, field: string, fieldElement: ElementRef<any>) {
    const fieldValue = item.fields[field];
    fieldElement.nativeElement.field = fieldValue;
    return this.editingMode().subscribe(x => {
      fieldElement.nativeElement.setMode(x); 
      if (x === 'Editing') {
        this.itemTracker.addItem(item);
      } else {
        this.itemTracker.removeItem(item);
      }
    });
  }

  editingMode() {
    return this.contentEditingSingleton.editingMode.asObservable();
  }

  setMode(mode: ContentMode) {
    if (mode === 'Editing' && !this.isTinyMceLoaded()) {
      this.ensureTinyMce().then(x => this.contentEditingSingleton.editingMode.next(mode));
    }
    else {
      this.contentEditingSingleton.editingMode.next(mode);
    }
  }

  private isTinyMceLoaded() {
    return (<any>window).tinyMCE !== undefined;
  }

  private ensureTinyMce() {
    return new Promise(resolve => {
      const scriptElement = document.createElement('script');
      scriptElement.src = this.settingsService.getSettings().tinyMcelocation;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
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