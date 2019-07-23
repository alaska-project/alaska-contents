import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentMode } from '../../../../contents/models/context-models';
import { ContentEditingService } from '../../../../contents/services/content-editing/content-editing.service';
import { ContextService } from '../../../../contents/services/context/context.service';
import { SettingsService } from '../../../../contents/services/settings/settings.service';

@Component({
  selector: 'aly-editing-mode-swither',
  templateUrl: './editing-mode-swither.component.html',
  styleUrls: ['./editing-mode-swither.component.scss']
})
export class EditingModeSwitherComponent implements OnInit, OnDestroy {

  private contentModeSub: Subscription;
  private pubTargetSub: Subscription;

  switchState = false;
  mode: ContentMode;
  target: string;

  constructor(
    private settings: SettingsService,
    private contextService: ContextService,
    private contentEditing: ContentEditingService) { }

  ngOnInit() {
    this.contentModeSub = this.contentEditing.editingMode().subscribe(x => {
      this.mode = x;
      this.switchState = this.getState(x);
    });
    this.pubTargetSub = this.contextService.publishingTarget().subscribe(x => {
      this.target = x;
    });
  }

  toggle() {
    if (this.target === this.settings.getSettings().webContentsTarget) {
      this.contextService.setPublishingTarget(this.settings.getSettings().previewContentsTarget, () => {
        this.changeMode();  
      });
    } else {
      this.changeMode();
    }
  }

  ngOnDestroy(): void {
    this.contentModeSub.unsubscribe();
    this.pubTargetSub.unsubscribe();
  }

  private changeMode() {
    const mode = this.mode === 'Default' ? 'Editing' : 'Default';
    this.contentEditing.setMode(mode);
  }

  private getState(mode: ContentMode) {
    return mode === 'Editing';
  }
}
