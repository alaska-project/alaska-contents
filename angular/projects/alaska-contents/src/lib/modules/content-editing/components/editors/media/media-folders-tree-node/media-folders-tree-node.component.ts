import { Component, OnInit, Input } from '@angular/core';
import { MediaFolderTreeNode } from '../media-folders-tree/media-folders-tree.models';

@Component({
  selector: 'aly-media-folders-tree-node',
  templateUrl: './media-folders-tree-node.component.html',
  styleUrls: ['./media-folders-tree-node.component.scss']
})
export class MediaFoldersTreeNodeComponent implements OnInit {

  @Input()
  node: MediaFolderTreeNode;
  
  constructor() { }

  ngOnInit() {
  }

  selectFolder() {
    
  }
}
