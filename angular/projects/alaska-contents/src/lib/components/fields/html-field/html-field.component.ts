import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { Subscription } from 'rxjs';
import { RichTextEditorModalComponent } from '../../editors/rich-text-editor-modal/rich-text-editor-modal.component';
import { RichTextEditorDialogModel } from '../../editors/rich-text-editor-modal/rich-text-editor-modal.model';
import { ContentField } from '../../../models/content-models';

@Component({
  selector: 'aly-html-field',
  templateUrl: './html-field.component.html',
  styleUrls: ['./html-field.component.scss']
})
export class HtmlFieldComponent implements OnInit, AfterViewInit, OnDestroy {

  private subscription: Subscription;
  private editorDialog: MatDialogRef<RichTextEditorModalComponent>;

  @ViewChild('fieldElement', { static: false })
  fieldElement: ElementRef<HTMLAlaskaHtmlFieldElement>;

  @Input()
  field: ContentField<string>;

  constructor(
    private contentEditing: ContentEditingService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.fieldElement.nativeElement.field = this.field;
    this.subscription = this.contentEditing.editingMode().subscribe(x => {
      this.fieldElement.nativeElement.setMode(x);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openEditor() {
    if (this.editorDialog) {
      return;
    }
    this.editorDialog = this.dialog.open(RichTextEditorModalComponent, {
      panelClass: 'no-padding-mat-dialog',
      width: '90%',
      height: '90%',
      data: <RichTextEditorDialogModel>{ value: this.field.value }
    });

    this.editorDialog.afterClosed().subscribe(x => {
      this.editorDialog = undefined;
      if (x) {
        this.field.value = x;
        this.fieldElement.nativeElement.field.value = x;
        //TODO: fix forceUpdate
        this.fieldElement.nativeElement.setMode('Default');
        setTimeout(() => this.fieldElement.nativeElement.setMode('Editing'));
      }
    });
  }
}
