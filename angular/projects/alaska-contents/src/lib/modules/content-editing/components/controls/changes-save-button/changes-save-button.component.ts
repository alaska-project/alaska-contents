import { Component, OnInit } from '@angular/core';
import { ContentItem } from '@alaska-project/contents-core/dist/types/models/content-models';
import { PandingChangesService } from '../../../../contents/services/pending-changes/panding-changes.service';
import { ContentsUpdateClient } from '../../../clients/contents-update.client';
import { OperationsService } from '../../../services/operations/operations.service';

@Component({
  selector: 'aly-changes-save-button',
  templateUrl: './changes-save-button.component.html',
  styleUrls: ['./changes-save-button.component.scss']
})
export class ChangesSaveButtonComponent implements OnInit {

  constructor(
    private contentsUpdateClient: ContentsUpdateClient,
    private pandingChangesService: PandingChangesService,
    private operation: OperationsService) { }

  ngOnInit() {
  }

  save() {
    const itemsToSave = this.pandingChangesService.getItems();
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
    this.pandingChangesService.removeItem(item.info.id);
  }
}
