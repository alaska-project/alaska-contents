import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContentMode } from '@alaska-project/contents-core/dist/types/models/component-models';

@Injectable({
  providedIn: 'root'
})
export class ContentEditingService {

  private _editingMode = new BehaviorSubject<ContentMode>('Default');

  constructor() { }

  editingMode() {
    return this._editingMode.asObservable();
  }

  setMode(mode: ContentMode) {
    this._editingMode.next(mode);
  }
}
