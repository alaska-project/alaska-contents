import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VideoEditorData } from './video-editor-dialog.model';
import { VideoFieldData } from '../../../../../contents/models/content-models';

@Component({
  selector: 'aly-video-editor-dialog',
  templateUrl: './video-editor-dialog.component.html',
  styleUrls: ['./video-editor-dialog.component.scss']
})
export class VideoEditorDialogComponent implements OnInit {

  videoData: VideoFieldData;

  constructor(
    private dialogRef: MatDialogRef<VideoEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: VideoEditorData) {
    this.videoData = Object.assign({}, data.field);
  }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.videoData);
  }
}
