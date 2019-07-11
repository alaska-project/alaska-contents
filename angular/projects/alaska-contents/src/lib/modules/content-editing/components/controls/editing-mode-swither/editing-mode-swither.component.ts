import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentMode } from '../../../../contents/models/context-models';
import { ContentEditingService } from '../../../../contents/services/content-editing/content-editing.service';

@Component({
  selector: 'aly-editing-mode-swither',
  templateUrl: './editing-mode-swither.component.html',
  styleUrls: ['./editing-mode-swither.component.scss']
})
export class EditingModeSwitherComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  switchState = false;
  mode: ContentMode;

  constructor(private contentEditing: ContentEditingService) { }

  ngOnInit() {
    this.subscription = this.contentEditing.editingMode().subscribe(x => {
      this.mode = x;
      this.switchState = this.getState(x);
    });
  }

  toggle() {
    const mode = this.mode === 'Default' ? 'Editing' : 'Default';
    this.contentEditing.setMode(mode);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getState(mode: ContentMode) {
    return mode === 'Editing';
  }
}
