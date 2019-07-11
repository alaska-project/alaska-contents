import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { Subscription } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LinkEditorDialogModel } from '../../editors/link-editor-modal/link-editor-modal.model';
import { ContentItem } from '../../../models/content-models';
import { LinkEditorModalComponent } from '../../editors/link-editor-modal/link-editor-modal.component';

@Component({
  selector: 'aly-link-field',
  templateUrl: './link-field.component.html',
  styleUrls: ['./link-field.component.scss']
})
export class LinkFieldComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  private subscription: Subscription;
  private editorDialog: MatDialogRef<LinkEditorModalComponent>;
  
  @ViewChild('fieldElement', {static: false}) 
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  openEditor() {
    if (this.editorDialog) {
      return;
    }
    this.editorDialog = this.dialog.open(LinkEditorModalComponent, {
      data: <LinkEditorDialogModel>{ linkData: this.getField().value }
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
