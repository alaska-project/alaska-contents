import { Component, OnInit } from '@angular/core';
import { ContentsUpdateClient } from '../../../clients/contents-update.client';
import { OperationsService } from '../../../services/operations/operations.service';
import { ItemTrackerService } from '../../../../contents/services/item-tracker/item-tracker.service';
import { ContentItem } from '../../../../contents/models/content-models';

@Component({
  selector: 'aly-changes-publish-button',
  templateUrl: './changes-publish-button.component.html',
  styleUrls: ['./changes-publish-button.component.scss']
})
export class ChangesPublishButtonComponent implements OnInit {

  constructor(
    private contentsUpdateClient: ContentsUpdateClient,
    private itemTracker: ItemTrackerService,
    private operation: OperationsService) { }

  ngOnInit() {
  }

  publish() {
    
  }

  // private async publishItem(item: ContentItem) {
  //   await this.contentsUpdateClient.pu(item).toPromise();
  //   this.itemTracker.updateItem(item);
  // }
}
