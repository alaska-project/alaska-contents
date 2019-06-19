import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { ContentField } from '@alaska-project/contents-core/dist/types/models/content-models';
import { Subscription } from 'rxjs';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';

@Component({
  selector: 'aly-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit, AfterViewInit, OnDestroy {

  private subscription: Subscription;
  
  @ViewChild('fieldElement', {static: false}) 
  fieldElement: ElementRef<HTMLAlaskaTextFieldElement>;

  @Input()
  field: ContentField<string>;

  constructor(private contentEditing: ContentEditingService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.fieldElement.nativeElement.field = this.field;
    this.subscription = this.contentEditing.editingMode().subscribe(x => {
      this.fieldElement.nativeElement.setMode(x);
    });
  }
}
