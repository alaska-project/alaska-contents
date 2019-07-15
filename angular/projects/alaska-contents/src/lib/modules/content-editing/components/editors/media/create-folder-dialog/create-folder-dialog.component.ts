import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateFolderDialogData } from './create-folder-dialog.models';

@Component({
  selector: 'aly-create-folder-dialog',
  templateUrl: './create-folder-dialog.component.html',
  styleUrls: ['./create-folder-dialog.component.scss']
})
export class CreateFolderDialogComponent implements OnInit {

  folderName = '';

  constructor(
    private dialogRef: MatDialogRef<CreateFolderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateFolderDialogData
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  ok() {
    if (!this.folderName) {
      return;
    }
    this.dialogRef.close(this.folderName);
  }
}
