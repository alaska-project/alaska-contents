import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MediaFolderService } from '../media-folders/media-folder.service';
import { OperationsService } from '../operations/operations.service';
import { CreateFolderDialogComponent } from '../../components/editors/media/create-folder-dialog/create-folder-dialog.component';
import { MediaFolder } from '../../clients/media-library.clients';
import { DeleteFolderDialogComponent } from '../../components/editors/media/delete-folder-dialog/delete-folder-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MediaFoldersEditorService {

  constructor(private dialog: MatDialog,
    private mediaFolder: MediaFolderService,
    private operation: OperationsService) { }

  createFolder(parentFolder: MediaFolder) {
    const dialog = this.dialog.open(CreateFolderDialogComponent, {
      data: {
        parent: parentFolder,
      }
    });
    dialog.afterClosed().subscribe(x => {
      if (x) {
        this.invokeCreateFolder(x, parentFolder);
      }
    });
  }

  private invokeCreateFolder(name: string, parentFolder: MediaFolder) {
    this.operation.run({
      operation: this.mediaFolder.createFolder(name, parentFolder),
      errorMessage: `Error creating folder ${name}`,
    })
  }

  deleteFolder(folder: MediaFolder) {
    const dialog = this.dialog.open(DeleteFolderDialogComponent, {
      data: {
        folder: folder,
      }
    });
    dialog.afterClosed().subscribe(x => {
      if (x) {
        this.invokeDeleteFolder(folder);
      }
    });
  }

  private invokeDeleteFolder(folder: MediaFolder) {
    this.operation.run({
      operation: this.mediaFolder.deleteFolder(folder),
      errorMessage: `Error deleting folder ${folder.name}`,
    })
  }
}
