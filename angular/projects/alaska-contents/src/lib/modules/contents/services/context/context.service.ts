import { Injectable, NgZone } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import { BehaviorSubject } from 'rxjs';
import { ContextData } from '../../models/context-models';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private context: ContextData;
  private contextSubject: BehaviorSubject<ContextData>;
  private languageSubject: BehaviorSubject<string>;
  private publishingTargetSubject: BehaviorSubject<string>;

  private currentTarget: string;
  private currentLanguage: string;

  constructor(
    private ngZone: NgZone,
    private settingsService: SettingsService) {
    this.context = this.getDefaultContext();
    this.contextSubject = new BehaviorSubject<ContextData>(this.getDefaultContext());
    this.languageSubject = new BehaviorSubject<string>(this.getDefaultContext().language);
    this.languageSubject.subscribe(x => this.currentLanguage = x);
    this.publishingTargetSubject = new BehaviorSubject<string>(this.getDefaultContext().publishingTarget);
    this.publishingTargetSubject.subscribe(x => this.currentTarget = x);
  }

  setLanguage(language: string, callback?: () => void) {
    if (this.currentLanguage === language) {
      return;
    }
    
    this.languageSubject.next(language);
    this.context.language = language;
    this.contextSubject.next(this.context);

    if (callback) {
      this.ngZone.run(callback);
    }
  }

  setPublishingTarget(publishingTarget: string, callback?: () => void) {
    if (this.currentTarget === publishingTarget) {
      return;
    }

    this.publishingTargetSubject.next(publishingTarget);
    this.context.publishingTarget = publishingTarget;
    this.contextSubject.next(this.context);

    if (callback) {
      this.ngZone.run(callback);
    }
  }

  currentContext() {
    return this.contextSubject.asObservable();
  }

  language() {
    return this.languageSubject.asObservable();
  }

  publishingTarget() {
    return this.publishingTargetSubject.asObservable();
  }

  private getDefaultContext() {
    return {
      language: this.settingsService.getSettings().defaultLanguage,
      publishingTarget: this.settingsService.getSettings().webContentsTarget,
    };
  }
}
