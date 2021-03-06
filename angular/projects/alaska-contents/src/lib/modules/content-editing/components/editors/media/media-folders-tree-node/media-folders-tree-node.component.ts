import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { MediaFolderTreeNode } from '../media-folders-tree/media-folders-tree.models';
import { Subscription } from 'rxjs';
import { MediaFolderEventsService } from '../../../../services/media-folder-events/media-folder-events.service';
import { MediaFolderService } from '../../../../services/media-folders/media-folder.service';

@Component({
  selector: 'aly-media-folders-tree-node',
  templateUrl: './media-folders-tree-node.component.html',
  styleUrls: ['./media-folders-tree-node.component.scss']
})
export class MediaFoldersTreeNodeComponent implements OnInit, OnDestroy, AfterViewInit {

  private sub: Subscription;

  @Input()
  node: MediaFolderTreeNode;

  isSelected = false;
  
  constructor(
    private mediaFolderEventsService: MediaFolderEventsService,
    private mediaFolderService: MediaFolderService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.sub = this.mediaFolderEventsService.folderSelected().subscribe(x => {
      if (x) {
        this.isSelected = this.node.value.id === x.folder.id
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  selectFolder() {
    this.mediaFolderService.selectFolder(this.node.value);
  }
}
