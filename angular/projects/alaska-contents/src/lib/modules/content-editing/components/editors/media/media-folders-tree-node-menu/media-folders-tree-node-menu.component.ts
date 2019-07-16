import { Component, OnInit, Input } from '@angular/core';
import { MediaFolderTreeNode } from '../media-folders-tree/media-folders-tree.models';

@Component({
  selector: 'aly-media-folders-tree-node-menu',
  templateUrl: './media-folders-tree-node-menu.component.html',
  styleUrls: ['./media-folders-tree-node-menu.component.scss']
})
export class MediaFoldersTreeNodeMenuComponent implements OnInit {

  @Input()
  node: MediaFolderTreeNode;
  
  constructor() { }

  ngOnInit() {
  }

  createSubfolder() {

  }

  delete() {
    
  }
}
