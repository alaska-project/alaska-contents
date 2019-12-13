import { Injectable } from '@angular/core';
import { MediaEditor } from '../../../contents/abstractions/media-editing.interfaces';
import { ContentField, ImageFieldData, VideoFieldData } from '../../../contents/models/content-models';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { MediaPickerDialogComponent } from '../../components/editors/media/media-picker-dialog/media-picker-dialog.component';
import { VideoEditorDialogComponent } from '../../components/editors/video/video-editor-dialog/video-editor-dialog.component';
import { MediaFieldData } from '@alaska-project/contents-core/dist/types/models/content-models';

@Injectable({
  providedIn: 'root'
})
export class DefaultMediaEditorService extends MediaEditor {

  constructor(private dialog: MatDialog) {
    super();
  }

  editImage(imageField: ContentField<ImageFieldData>): Observable<ImageFieldData> {
    const dialog = this.dialog.open(MediaPickerDialogComponent, {
      maxWidth: '90vw',
      width: '90vw',
      height: '90vh',
      panelClass: 'dialog-no-padding',
      data: {
        field: imageField
      }
    });
    return dialog.afterClosed();
  }

  editVideo(videoField: ContentField<VideoFieldData>) {
    const dialog = this.dialog.open(VideoEditorDialogComponent, {
      data: {
        field: videoField.value
      }
    });
    return dialog.afterClosed();
  }
  editMedia(mediaField: ContentField<MediaFieldData>) {
    const dialog = this.dialog.open(MediaPickerDialogComponent, {
      maxWidth: '90vw',
      width: '90vw',
      height: '90vh',
      panelClass: 'dialog-no-padding',
      data: {
        field: mediaField
      }
    });
    return dialog.afterClosed();
  }
}
