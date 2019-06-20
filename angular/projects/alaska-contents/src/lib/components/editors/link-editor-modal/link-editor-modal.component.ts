import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LinkEditorDialogModel } from './link-editor-modal.model';
import { LinkFieldData } from '@alaska-project/contents-core/dist/types/models/content-models';

@Component({
  selector: 'aly-link-editor-modal',
  templateUrl: './link-editor-modal.component.html',
  styleUrls: ['./link-editor-modal.component.scss']
})
export class LinkEditorModalComponent implements OnInit {

  targets = [{
    value: '_self',
    label: 'Self'
  }, {
    value: '_blank',
    label: 'New Window'
  }];

  linkData: LinkFieldData;

  constructor(
    private dialogRef: MatDialogRef<LinkEditorModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: LinkEditorDialogModel) {
    this.linkData = Object.assign({}, data.linkData);
  }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.linkData);
  }
}
