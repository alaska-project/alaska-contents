import { Component, OnInit, Input } from '@angular/core';
import { MediaFolderTreeNode } from '../media-folders-tree/media-folders-tree.models';
import { MediaFoldersEditorService } from '../../../../services/media-folders-editor/media-folders-editor.service';
import { MediaFolderService } from '../../../../services/media-folders/media-folder.service';

@Component({
  selector: 'aly-media-folders-tree-node-menu',
  templateUrl: './media-folders-tree-node-menu.component.html',
  styleUrls: ['./media-folders-tree-node-menu.component.scss']
})
export class MediaFoldersTreeNodeMenuComponent implements OnInit {

  @Input()
  node: MediaFolderTreeNode;
  
  constructor(
    private mediaFolderService: MediaFolderService,
    private mediaFoldersEditorService: MediaFoldersEditorService) { }

  ngOnInit() {
  }

  refresh() {
    this.mediaFolderService.reloadFolder(this.node.value);
  }

  createSubfolder() {
    this.mediaFoldersEditorService.createFolder(this.node.value);
  }

  delete() {
    this.mediaFoldersEditorService.deleteFolder(this.node.value);
  }
}
