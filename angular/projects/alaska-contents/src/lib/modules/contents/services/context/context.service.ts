import { Injectable } from '@angular/core';
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

  constructor(private settingsService: SettingsService) {
    this.context = this.getDefaultContext();
    this.contextSubject = new BehaviorSubject<ContextData>(this.getDefaultContext());
    this.languageSubject = new BehaviorSubject<string>(this.getDefaultContext().language);
    this.publishingTargetSubject = new BehaviorSubject<string>(this.getDefaultContext().publishingTarget);
  }

  setLanguage(language: string) {
    this.languageSubject.next(language);
    this.context.language = language;
    this.contextSubject.next(this.context);
  }

  setPublishingTarget(publishingTarget: string) {
    this.publishingTargetSubject.next(publishingTarget);
    this.context.publishingTarget = publishingTarget;
    this.contextSubject.next(this.context);
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
