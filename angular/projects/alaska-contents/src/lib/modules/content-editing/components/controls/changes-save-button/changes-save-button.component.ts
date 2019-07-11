import { Component, OnInit } from '@angular/core';
import { ContentItem } from '@alaska-project/contents-core/dist/types/models/content-models';
import { ContentsUpdateClient } from '../../../clients/contents-update.client';
import { OperationsService } from '../../../services/operations/operations.service';
import { ItemTrackerService } from '../../../../contents/services/item-tracker/item-tracker.service';

@Component({
  selector: 'aly-changes-save-button',
  templateUrl: './changes-save-button.component.html',
  styleUrls: ['./changes-save-button.component.scss']
})
export class ChangesSaveButtonComponent implements OnInit {

  constructor(
    private contentsUpdateClient: ContentsUpdateClient,
    private itemTracker: ItemTrackerService,
    private operation: OperationsService) { }

  ngOnInit() {
  }

  save() {
    const itemsToSave = this.itemTracker.getItemWithPendingChanges();
    if (itemsToSave.length === 0) {
      return;
    }

    this.operation.run({
      operation: this.saveItems(itemsToSave),
      notificationMessage: 'Items saved',
    });
  }

  private async saveItems(items: ContentItem[]) {
    for (let item of items) {
      await this.saveItem(item);
    }
  }

  private async saveItem(item: ContentItem) {
    await this.contentsUpdateClient.updateContent(item).toPromise();
    this.itemTracker.updateItem(item);
  }
}
