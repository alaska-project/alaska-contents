import { Injectable } from '@angular/core';
import { SettingsService } from '../services/settings/settings.service';

@Injectable({
    providedIn: 'root'
})
export class ContentsClient {

    constructor(private settingsService: SettingsService) { }

    getContents() {

    }

    updateContent() {

    }
}

