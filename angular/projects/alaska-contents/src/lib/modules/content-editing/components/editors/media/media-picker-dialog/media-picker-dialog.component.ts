import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MediaPickerData } from './media-picker-dialog.models';

@Component({
  selector: 'aly-media-picker-dialog',
  templateUrl: './media-picker-dialog.component.html',
  styleUrls: ['./media-picker-dialog.component.scss']
})
export class MediaPickerDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<MediaPickerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MediaPickerData
  ) { }

  ngOnInit() {
  }
}
