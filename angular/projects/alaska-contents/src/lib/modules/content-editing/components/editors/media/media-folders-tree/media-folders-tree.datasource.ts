import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, merge } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MediaLibraryClient, MediaFolder } from '../../../../clients/media-library.clients';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { MediaFolderTreeNode } from './media-folders-tree.models';

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
        private mediaClient: MediaLibraryClient) { }

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
        this.mediaClient.getRootFolders().subscribe(x => this.data = x.map(folder => this.convertToNode(folder, undefined)));
    }

    /** Handle expand/collapse behaviors */
    handleTreeControl(change: SelectionChange<MediaFolderTreeNode>) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
        }
    }

    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node: MediaFolderTreeNode, expand: boolean) {

        const index = this.data.indexOf(node);
        if (index < 0) {
            return;
        }

        if (expand) {
            node.isLoading = true;
            this.mediaClient.getChildrenFolders(node.value.id).subscribe(folders => {
                const nodes = folders.map(x => this.convertToNode(x, node));
                this.data.splice(index + 1, 0, ...nodes);
                node.isLoading = false;
            });
        } else {
            let count = 0;
            for (let i = index + 1; i < this.data.length
                && this.data[i].level > node.level; i++ , count++) { }
            this.data.splice(index + 1, count);
        }


        // const children = this._database.getChildren(node.item);
        // const index = this.data.indexOf(node);
        // if (!children || index < 0) { // If no children, or cannot find the node, no op
        //     return;
        // }

        // node.isLoading = true;

        // setTimeout(() => {
        //     if (expand) {
        //         const nodes = children.map(name =>
        //             new MediaFolderTreeNode(name, node.level + 1, this._database.isExpandable(name)));
        //         this.data.splice(index + 1, 0, ...nodes);
        //     } else {
        //         let count = 0;
        //         for (let i = index + 1; i < this.data.length
        //             && this.data[i].level > node.level; i++ , count++) { }
        //         this.data.splice(index + 1, count);
        //     }

        //     // notify the change
        //     this.dataChange.next(this.data);
        //     node.isLoading = false;
        // }, 1000);
    }

    private convertToNode(folder: MediaFolder, parent: MediaFolderTreeNode): MediaFolderTreeNode {
        return {
            value: folder,
            children: [],
            isLoading: false,
            expandable: false,
            level: parent ? parent.level + 1 : 0,
        }
    }
}