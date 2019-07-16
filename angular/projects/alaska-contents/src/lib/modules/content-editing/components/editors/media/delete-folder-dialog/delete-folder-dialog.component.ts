import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteFolderDialogData } from './delete-folder-dialog.models';

@Component({
  selector: 'aly-delete-folder-dialog',
  templateUrl: './delete-folder-dialog.component.html',
  styleUrls: ['./delete-folder-dialog.component.scss']
})
export class DeleteFolderDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteFolderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteFolderDialogData) { }

  ngOnInit() {
  }

  ok() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close();
  }
}
