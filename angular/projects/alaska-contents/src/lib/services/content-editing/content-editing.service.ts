import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SettingsService } from '../settings/settings.service';
import { ContentMode } from '../../models/context-models';
import { PandingChangesService } from '../pending-changes/panding-changes.service';
import { ContentItem } from '@alaska-project/contents-core/dist/types/models/content-models';

@Injectable({
  providedIn: 'root'
})
export class ContentEditingService {

  private readonly contentEditingSingleton = ContentEditingService.getContentEditingService();
  constructor(
    private pandingChangesService: PandingChangesService,
    private settingsService: SettingsService) { 
  }

  trackItem(item: ContentItem, mode: ContentMode) {
    if (mode === 'Editing') {
      this.pandingChangesService.add(item);
    }
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