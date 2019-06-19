import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { LinkFieldData, ContentField } from '@alaska-project/contents-core/dist/types/models/content-models';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aly-link-field',
  templateUrl: './link-field.component.html',
  styleUrls: ['./link-field.component.scss']
})
export class LinkFieldComponent implements OnInit, AfterViewInit, OnDestroy {

  private subscription: Subscription;

  @ViewChild('fieldElement', {static: false}) 
  fieldElement: ElementRef<HTMLAlaskaLinkFieldElement>;

  @Input()
  field: ContentField<LinkFieldData>;
  
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
