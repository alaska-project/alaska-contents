import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { ContentField } from '@alaska-project/contents-core/dist/types/models/content-models';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { ContentMode } from '@alaska-project/contents-core/dist/types/models/component-models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aly-content-field',
  templateUrl: './content-field.component.html',
  styleUrls: ['./content-field.component.scss']
})
export class ContentFieldComponent implements OnInit, OnDestroy, AfterViewInit {

  private contentModeSubscription: Subscription;

  @Input()
  field: ContentField<any>;

  @Input()
  mode: ContentMode;

  constructor(private contentEditingService: ContentEditingService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.contentModeSubscription) {
      this.contentModeSubscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    if (!this.isExplicitContentMode()) {
      this.contentModeSubscription = this.contentEditingService.editingMode().subscribe(x => {
        setTimeout(() => this.mode = x);
      });
    }
  }

  private isExplicitContentMode() {
    return this.mode !== undefined;
  }
}
