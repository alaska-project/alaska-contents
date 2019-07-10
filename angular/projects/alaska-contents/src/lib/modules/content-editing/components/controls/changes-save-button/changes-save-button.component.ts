import { Component, OnInit } from '@angular/core';
import { ContentItem } from '@alaska-project/contents-core/dist/types/models/content-models';
import { ContentsClient } from '../../../../contents/clients/contents.client';
import { PandingChangesService } from '../../../../contents/services/pending-changes/panding-changes.service';

@Component({
  selector: 'aly-changes-save-button',
  templateUrl: './changes-save-button.component.html',
  styleUrls: ['./changes-save-button.component.scss']
})
export class ChangesSaveButtonComponent implements OnInit {

  constructor(
    private contentsClient: ContentsClient,
    private pandingChangesService: PandingChangesService) { }

  ngOnInit() {
  }

  save() {
    const itemsToSave = this.pandingChangesService.getItemsWithChanges();
    if (itemsToSave.length === 0) {
      return;
    }

    itemsToSave.forEach(x => this.saveItem(x));
  }

  private saveItem(item: ContentItem) {
    this.contentsClient.updateContent(item).subscribe(() => {
      this.pandingChangesService.remove(item.info.id);
    });
  }
}
