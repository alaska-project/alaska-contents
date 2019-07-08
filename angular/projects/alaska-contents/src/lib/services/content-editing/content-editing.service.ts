import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SettingsService } from '../settings/settings.service';
import { ContentMode } from '../../models/context-models';

@Injectable({
  providedIn: 'root'
})
export class ContentEditingService {

  private readonly contentEditingSingleton = ContentEditingService.getContentEditingService();
  constructor(private settingsService: SettingsService) { 
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