import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentItem } from '../../../models/content-models';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';

@Component({
  selector: 'aly-background-image-field',
  templateUrl: './background-image-field.component.html',
  styleUrls: ['./background-image-field.component.scss']
})
export class BackgroundImageFieldComponent implements OnInit {

  private subscription: Subscription;

  @ViewChild('fieldElement', { static: false })
  fieldElement: ElementRef<any>;

  @Input()
  field: string;

  @Input()
  item: ContentItem;

  @Input()
  width: string;

  @Input()
  height: string;

  @Input()
  repeat: boolean;

  @Input()
  position: string;

  @Input()
  size: string;

  constructor(private contentEditing: ContentEditingService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.fieldElement.nativeElement.field = this.getField();
    this.subscription = this.contentEditing.editingMode().subscribe(x => {
      this.contentEditing.trackItem(this.item, x);
      this.fieldElement.nativeElement.setMode(x);
    });
  }

  private getField() {
    return this.item.fields[this.field];
  }
}
