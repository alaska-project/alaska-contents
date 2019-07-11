import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SettingsService } from '../settings/settings.service';
import { ContentMode } from '../../models/context-models';
import { ItemTrackerService } from '../item-tracker/item-tracker.service';
import { ContextService } from '../context/context.service';
import { ContentItem } from '../../models/content-models';

@Injectable({
  providedIn: 'root'
})
export class ContentEditingService {

  private readonly contentEditingSingleton = ContentEditingService.getContentEditingService();
  private currentMode: ContentMode;

  constructor(
    private itemTracker: ItemTrackerService,
    private context: ContextService,
    private settingsService: SettingsService) {
    this.context.publishingTarget().subscribe(x => this.onPublishingTargetChanged(x));
    this.contentEditingSingleton.editingMode.subscribe(x => this.currentMode = x);
  }

  initializeField(item: ContentItem, field: string, fieldElement: ElementRef<any>) {
    if (!item || !field) {
      return;
    }

    const fieldValue = item.fields[field];
    fieldElement.nativeElement.field = fieldValue;
    return this.editingMode().subscribe(x => {
      fieldElement.nativeElement.setMode(x);
      if (x === 'Editing') {
        this.itemTracker.addItem(item);
        this.context.setPublishingTarget(this.settingsService.getSettings().previewContentsTarget);
      } else {
        this.itemTracker.removeItem(item);
      }
    });
  }

  editingMode() {
    return this.contentEditingSingleton.editingMode.asObservable();
  }

  setMode(mode: ContentMode) {
    if (this.currentMode === mode) {
      return;
    }

    if (mode === 'Editing' && !this.isTinyMceLoaded()) {
      this.ensureTinyMce().then(x => this.contentEditingSingleton.editingMode.next(mode));
    }
    else {
      this.contentEditingSingleton.editingMode.next(mode);
    }
  }

  private onPublishingTargetChanged(target: string) {
    if (target === this.settingsService.getSettings().webContentsTarget) {
      this.setMode('Default');
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