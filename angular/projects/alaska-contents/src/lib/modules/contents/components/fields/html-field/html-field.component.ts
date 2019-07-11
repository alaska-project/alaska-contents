import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { Subscription } from 'rxjs';
import { ContentItem } from '@alaska-project/contents-core/dist/types/models/content-models';
import { RichTextEditorModalComponent } from '../../editors/rich-text-editor-modal/rich-text-editor-modal.component';
import { RichTextEditorDialogModel } from '../../editors/rich-text-editor-modal/rich-text-editor-modal.model';

@Component({
  selector: 'aly-html-field',
  templateUrl: './html-field.component.html',
  styleUrls: ['./html-field.component.scss']
})
export class HtmlFieldComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  private subscription: Subscription;
  private editorDialog: MatDialogRef<RichTextEditorModalComponent>;

  @ViewChild('fieldElement', { static: false })
  fieldElement: ElementRef<any>;

  @Input()
  field: string;

  @Input()
  item: ContentItem;

  constructor(
    private contentEditing: ContentEditingService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.subscription = this.contentEditing.initializeField(this.item, this.field, this.fieldElement);
  }

  ngOnChanges(changes: any): void {
    if (changes.item && changes.item.firstChange === false) {
      this.subscription.unsubscribe();
      this.subscription = this.contentEditing.initializeField(this.item, this.field, this.fieldElement);
    }
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
      data: <RichTextEditorDialogModel>{ value: this.getField().value }
    });

    this.editorDialog.afterClosed().subscribe(x => {
      this.editorDialog = undefined;
      if (x) {
        this.getField().value = x;
        this.fieldElement.nativeElement.field.value = x;
        //TODO: fix forceUpdate
        this.fieldElement.nativeElement.setMode('Default');
        setTimeout(() => this.fieldElement.nativeElement.setMode('Editing'));
      }
    });
  }

  private getField() {
    return this.item.fields[this.field];
  }
}
