import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RichTextEditorDialogModel } from './rich-text-editor-modal.model';

@Component({
  selector: 'aly-rich-text-editor-modal',
  templateUrl: './rich-text-editor-modal.component.html',
  styleUrls: ['./rich-text-editor-modal.component.scss']
})
export class RichTextEditorModalComponent implements OnInit, AfterViewInit {

  @ViewChild('htmlEditor', {static: false})
  htmlEditor: ElementRef<HTMLAlaskaRichTextEditorElement>;

  value: string;

  constructor(
    private dialogRef: MatDialogRef<RichTextEditorModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: RichTextEditorDialogModel) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.value = this.data.value;
    this.htmlEditor.nativeElement.initialize({}, this.data.value);
  }

  updateValue(event: any) {
    this.value = event.detail;
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.value);
  }
}
