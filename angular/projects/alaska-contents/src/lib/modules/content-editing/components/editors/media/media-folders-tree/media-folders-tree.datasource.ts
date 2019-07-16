import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, merge } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MediaFolder } from '../../../../clients/media-library.clients';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { MediaFolderTreeNode } from './media-folders-tree.models';
import { MediaFolderService } from '../../../../services/media-folders/media-folder.service';
import { FolderDeletedEvent, FolderCreatedEvent } from '../../../../services/media-folders/media-folder.models';

@Injectable()
export class MediaFoldersDataSource {

    dataChange = new BehaviorSubject<MediaFolderTreeNode[]>([]);

    get data(): MediaFolderTreeNode[] { return this.dataChange.value; }
    set data(value: MediaFolderTreeNode[]) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }

    constructor(
        private _treeControl: FlatTreeControl<MediaFolderTreeNode>,
        private mediaFolderService: MediaFolderService) { }

    connect(collectionViewer: CollectionViewer): Observable<MediaFolderTreeNode[]> {
        this._treeControl.expansionModel.onChange.subscribe(change => {
            if ((change as SelectionChange<MediaFolderTreeNode>).added ||
                (change as SelectionChange<MediaFolderTreeNode>).removed) {
                this.handleTreeControl(change as SelectionChange<MediaFolderTreeNode>);
            }
        });

        return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
    }

    loadRootFolders() {
        this.mediaFolderService.getRootFolders().subscribe(x => this.data = x.map(folder => this.convertToNode(folder, undefined)));
        this.mediaFolderService.folderCreated().subscribe(x => this.hendleFolderCreated(x));
        this.mediaFolderService.folderDeleted().subscribe(x => this.handleFolderDelete(x));
    }

    handleTreeControl(change: SelectionChange<MediaFolderTreeNode>) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
        }
    }

    toggleNode(node: MediaFolderTreeNode, expand: boolean) {
        const index = this.data.indexOf(node);
        if (index < 0) {
            return;
        }

        if (expand) {
            node.isLoading = true;
            this.mediaFolderService.getChildrenFolders(node.value.id).subscribe(folders => {
                const nodes = folders.map(x => this.convertToNode(x, node));
                const newNodes = this.data.filter(x => true);
                newNodes.splice(index + 1, 0, ...nodes);
                //this.data.splice(index + 1, 0, ...nodes);
                this.data = newNodes;
                node.isLoading = false;
            });
        } else {
            this.removeChildNodes(node, false);
        }
    }

    private handleFolderDelete(event: FolderDeletedEvent) {
        const nodeToRemove = this.data.find(x => x.value.id === event.folder.id);
        if (nodeToRemove) {
            this.removeChildNodes(nodeToRemove, true);
        }
    }

    private hendleFolderCreated(event: FolderCreatedEvent) {
        if (event.parent) {
            const currentParentNode = this.data.find(x => x.value.id === event.parent.id);
            if (currentParentNode) {
                if (this._treeControl.isExpanded(currentParentNode)) {
                    this._treeControl.collapse(currentParentNode);
                }
                this._treeControl.expand(currentParentNode);
            }
        } else {
            const newNodes = this.cloneData();
            newNodes.unshift(this.convertToNode(event.folder, undefined));
            this.data = newNodes;
        }
    }

    private removeChildNodes(node: MediaFolderTreeNode, removeSelf: boolean) {
        const index = this.data.indexOf(node);
        let count = 0;
        for (let i = index + 1; i < this.data.length
            && this.data[i].level > node.level; i++ , count++) { }
        //this.data.splice(index + 1, count);
        const newNodes = this.cloneData();
        if (removeSelf) {
            newNodes.splice(index, count + 1);
        } else {
            newNodes.splice(index + 1, count);
        }
        this.data = newNodes;
    }

    private convertToNode(folder: MediaFolder, parent: MediaFolderTreeNode): MediaFolderTreeNode {
        return {
            value: folder,
            children: [],
            isLoading: false,
            expandable: true,
            level: parent ? parent.level + 1 : 0,
        }
    }

    private cloneData() {
        return this.data.filter(x => true);
    }
}