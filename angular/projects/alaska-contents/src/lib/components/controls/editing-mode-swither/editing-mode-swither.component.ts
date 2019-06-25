import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentEditingService } from '../../../services/content-editing/content-editing.service';
import { Subscription } from 'rxjs';
import { ContentMode } from '../../../models/context-models';

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
