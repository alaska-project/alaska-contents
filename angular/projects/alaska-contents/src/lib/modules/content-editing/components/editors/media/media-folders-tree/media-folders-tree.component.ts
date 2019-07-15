import { Component, OnInit } from '@angular/core';
import { MediaLibraryClient } from '../../../../clients/media-library.clients';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MediaFolderTreeNode } from './media-folders-tree.models';
import { MediaFoldersDataSource } from './media-folders-tree.datasource';
import { MediaFolderService } from '../../../../services/media-folders/media-folder.service';

@Component({
  selector: 'aly-media-folders-tree',
  templateUrl: './media-folders-tree.component.html',
  styleUrls: ['./media-folders-tree.component.scss']
})
export class MediaFoldersTreeComponent implements OnInit {

  treeControl: FlatTreeControl<MediaFolderTreeNode>;
  dataSource: MediaFoldersDataSource;

  constructor(private mediaFoldersService: MediaFolderService) { 
    this.treeControl = new FlatTreeControl<MediaFolderTreeNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MediaFoldersDataSource(this.treeControl, mediaFoldersService);
    this.dataSource.loadRootFolders();
  }

  ngOnInit() {
  }

  getLevel = (node: MediaFolderTreeNode) => node.level;

  isExpandable = (node: MediaFolderTreeNode) => node.expandable;

  hasChild = (_: number, _nodeData: MediaFolderTreeNode) => _nodeData.expandable;
}
