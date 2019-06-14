import { Component, OnInit, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'aly-rich-text-editor-popover',
  templateUrl: './rich-text-editor-popover.component.html',
  styleUrls: ['./rich-text-editor-popover.component.scss']
})
export class RichTextEditorPopoverComponent implements OnInit {

  private valueChanged = new Subject<string>();

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
    this.valueChanged.next(this.editorValue);
    this.dialogRef.close();
  }
  
  onValueChanged() {
    return this.valueChanged.asObservable();
  }
}

export interface RichTextEditorDialogData {
  initialValue: string;
}
