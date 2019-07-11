import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContextService } from '../../../../contents/services/context/context.service';
import { SettingsService } from '../../../../contents/services/settings/settings.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aly-publishing-target-switcher',
  templateUrl: './publishing-target-switcher.component.html',
  styleUrls: ['./publishing-target-switcher.component.scss']
})
export class PublishingTargetSwitcherComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  switchState = false;
  target = '';
  
  constructor(
    private settings: SettingsService,
    private contextService: ContextService) {
  }

  ngOnInit() {
    this.subscription = this.contextService.publishingTarget().subscribe(x => {
      this.target = x;
      this.switchState = this.getState(x);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggle() {
    const newTarget = this.getTarget(this.switchState);
    this.contextService.setPublishingTarget(newTarget);
  }

  private getTarget(switchState: boolean) {
    return switchState ? 
      this.settings.getSettings().webContentsTarget :
      this.settings.getSettings().previewContentsTarget;
  }

  private getState(target: string) {
    return target === this.settings.getSettings().webContentsTarget;
  }
}

export interface PublishingTargetValue {
  value: string;
  displayName: string;
}

