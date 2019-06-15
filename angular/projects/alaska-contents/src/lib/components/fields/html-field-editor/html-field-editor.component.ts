import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { ContentField, ImageFieldData } from '@alaska-project/contents-core/dist/types/models/content-models';
import { MatDialog } from '@angular/material/dialog';
import { RichTextEditorPopoverComponent } from '../../editors/rich-text-editor-popover/rich-text-editor-popover.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aly-html-field-editor',
  templateUrl: './html-field-editor.component.html',
  styleUrls: ['./html-field-editor.component.scss']
})
export class HtmlFieldEditorComponent implements OnInit, OnDestroy, AfterViewInit {

  private _editorValueSubscripion: Subscription;
  
  @ViewChild('fieldElement', {static: false}) 
  fieldElement: ElementRef<HTMLAlaskaHtmlFieldEditorElement>;

  @Input()
  field: ContentField<string>;
  
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this._editorValueSubscripion) {
      this._editorValueSubscripion.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    this.fieldElement.nativeElement.field = this.field;
  }

  openEditor() {
    const dialogRef = this.dialog.open(RichTextEditorPopoverComponent, {
      panelClass: 'no-padding-mat-dialog',
      width: '90%',
      height: '90%',
      data: { initialValue: this.field.value }
    });

    dialogRef.afterClosed().toPromise().then((result: string) => {
      if (result) {
        this.field.value = result;
        this.fieldElement.nativeElement.forceUpdate();
      }
    });
  }
}
