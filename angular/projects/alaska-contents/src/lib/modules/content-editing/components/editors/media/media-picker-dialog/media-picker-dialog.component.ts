import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MediaPickerData } from './media-picker-dialog.models';
import { MediaFolderService } from '../../../../services/media-folders/media-folder.service';

@Component({
  selector: 'aly-media-picker-dialog',
  templateUrl: './media-picker-dialog.component.html',
  styleUrls: ['./media-picker-dialog.component.scss']
})
export class MediaPickerDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<MediaPickerDialogComponent>,
    private mediaFolderService: MediaFolderService,
    @Inject(MAT_DIALOG_DATA) private data: MediaPickerData
  ) { }

  ngOnInit() {
    this.mediaFolderService.selectMedia(this.data.field.value.id);
  }
}
