import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentField } from '@alaska-project/contents-core/dist/types/models/content-models';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aly-html-field',
  templateUrl: './html-field.component.html',
  styleUrls: ['./html-field.component.scss']
})
export class HtmlFieldComponent implements OnInit, AfterViewInit, OnDestroy {

  private subscription: Subscription;

  @ViewChild('fieldElement', {static: false}) 
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
  }
}
