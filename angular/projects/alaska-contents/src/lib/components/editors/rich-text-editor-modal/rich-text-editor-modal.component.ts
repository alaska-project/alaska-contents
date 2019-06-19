import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RichTextEditorDialogModel } from './rich-text-editor-modal.model';

@Component({
  selector: 'aly-rich-text-editor-modal',
  templateUrl: './rich-text-editor-modal.component.html',
  styleUrls: ['./rich-text-editor-modal.component.scss']
})
export class RichTextEditorModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<RichTextEditorModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: RichTextEditorDialogModel) { }

  ngOnInit() {
  }

}
