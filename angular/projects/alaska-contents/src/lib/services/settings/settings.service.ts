import { Injectable } from '@angular/core';
import { AlaskaContentsSettings } from '../../models/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getSettings() {
    return SettingsService.getSettingsInstance();
  }

  static getSettingsInstance(): AlaskaContentsSettings {
    const win = <any>window;
    if (!win.AlaskaContentsSettings) {
      win.AlaskaContentsSettings = {};
    }
    return win.AlaskaContentsSettings;
  }

  static setSettingsInstance(settings: AlaskaContentsSettings) {
    const win = <any>window;
    if (!win.AlaskaContentsSettings) {
      win.AlaskaContentsSettings = {};
    }
    win.AlaskaContentsSettings = settings;
  }
}
