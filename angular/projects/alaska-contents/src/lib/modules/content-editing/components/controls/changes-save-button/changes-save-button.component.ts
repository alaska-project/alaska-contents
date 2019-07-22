import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentItem } from '@alaska-project/contents-core/dist/types/models/content-models';
import { ContentsUpdateClient } from '../../../clients/contents-update.client';
import { OperationsService } from '../../../services/operations/operations.service';
import { ItemTrackerService } from '../../../../contents/services/item-tracker/item-tracker.service';
import { SettingsService } from '../../../../contents/services/settings/settings.service';
import { ContextService } from '../../../../contents/services/context/context.service';
import { Subscription } from 'rxjs';
import { ContentEditingService } from '../../../../contents/services/content-editing/content-editing.service';
import { ContentMode } from '@alaska-project/contents-core/dist/types/models/component-models';

@Component({
  selector: 'aly-changes-save-button',
  templateUrl: './changes-save-button.component.html',
  styleUrls: ['./changes-save-button.component.scss']
})
export class ChangesSaveButtonComponent implements OnInit, OnDestroy {

  private pubTargetSub: Subscription;
  private contentModeSub: Subscription;

  private target: string;
  private mode: ContentMode;

  constructor(
    private settings: SettingsService,
    private contentEditing: ContentEditingService,
    private contextService: ContextService,
    private contentsUpdateClient: ContentsUpdateClient,
    private itemTracker: ItemTrackerService,
    private operation: OperationsService) { }

  ngOnInit() {
    this.contentModeSub = this.contentEditing.editingMode().subscribe(x => this.mode = x);
    this.pubTargetSub = this.contextService.publishingTarget().subscribe(x => this.target = x);
  }

  ngOnDestroy(): void {
    this.contentModeSub.unsubscribe();
    this.pubTargetSub.unsubscribe();
  }

  isDisabled() {
    return this.mode !== 'Editing' || this.target === this.settings.getSettings().webContentsTarget;
  }

  save() {
    const itemsToSave = this.itemTracker.getItemWithPendingChanges();
    if (itemsToSave.length === 0) {
      return;
    }

    this.operation.run({
      operation: this.saveItems(itemsToSave),
      notificationMessage: 'Page saved',
    });
  }

  saveAndPublish() {
    const itemsToPublish = this.itemTracker.getTrackedItems();
    if (itemsToPublish.length === 0) {
      return;
    }

    const itemsToSave = this.itemTracker.getItemWithPendingChanges();
    this.operation.run({
      operation: this.saveAndPublishItems(itemsToSave, itemsToPublish),
      notificationMessage: 'Page published',
    });
  }

  private async saveAndPublishItems(itemsToSave: ContentItem[], itemsToPublish: ContentItem[]) {
    await this.saveItems(itemsToSave);
    await this.publishItems(itemsToPublish);
  }

  private async publishItems(items: ContentItem[]) {
    for (let item of items) {
      await this.publishItem(item);
    }
  }

  private async publishItem(item: ContentItem) { 
    await this.contentsUpdateClient.publishContent(item).toPromise();
  }

  private async saveItems(items: ContentItem[]) {
    for (let item of items) {
      await this.saveItem(item);
    }
  }

  private async saveItem(item: ContentItem) {
    debugger;
    await this.contentsUpdateClient.updateContent(item).toPromise();
    this.itemTracker.updateItem(item);
  }
}
