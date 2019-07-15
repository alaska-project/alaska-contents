import { Injectable } from '@angular/core';
import { MediaEditor } from '../../../contents/abstractions/media-editing.interfaces';
import { ContentField, ImageFieldData } from '../../../contents/models/content-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultMediaEditorService extends MediaEditor {

  constructor() { 
    super();
  }

  editImage(imageField: ContentField<ImageFieldData>): Observable<ImageFieldData> {
    throw new Error("Method not implemented.");
  }
}
