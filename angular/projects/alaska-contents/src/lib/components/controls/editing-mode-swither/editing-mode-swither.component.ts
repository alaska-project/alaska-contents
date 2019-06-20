import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentMode } from '@alaska-project/contents-core/dist/types/models/component-models';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aly-editing-mode-swither',
  templateUrl: './editing-mode-swither.component.html',
  styleUrls: ['./editing-mode-swither.component.scss']
})
export class EditingModeSwitherComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  mode: ContentMode;
  
  constructor(private contentEditing: ContentEditingService) { }

  ngOnInit() {
    this.subscription = this.contentEditing.editingMode().subscribe(x => this.mode = x);
  }

  toggle() {
    const mode = this.mode === 'Default' ? 'Editing' : 'Default';
    this.contentEditing.setMode(mode);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
