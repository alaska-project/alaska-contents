import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'aly-rich-text-editor-popover',
  templateUrl: './rich-text-editor-popover.component.html',
  styleUrls: ['./rich-text-editor-popover.component.scss']
})
export class RichTextEditorPopoverComponent implements OnInit {

  editorValue: string;

  constructor(private dialogRef: MatDialogRef<RichTextEditorPopoverComponent>,
    @Inject(MAT_DIALOG_DATA) data: RichTextEditorDialogData) {
    this.editorValue = data.initialValue;
  }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.editorValue);
  }
  
  valueChanged(event: any) {
    this.editorValue = event.detail;
  }
}

export interface RichTextEditorDialogData {
  initialValue: string;
}
