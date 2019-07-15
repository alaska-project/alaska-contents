import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MediaFolder } from '../../../../clients/media-library.clients';
import { CreateFolderDialogComponent } from '../create-folder-dialog/create-folder-dialog.component';
import { MediaFolderService } from '../../../../services/media-folders/media-folder.service';
import { OperationsService } from '../../../../services/operations/operations.service';

@Component({
  selector: 'aly-create-folder-button',
  templateUrl: './create-folder-button.component.html',
  styleUrls: ['./create-folder-button.component.scss']
})
export class CreateFolderButtonComponent implements OnInit {

  @Input()
  parentFolder: MediaFolder;

  constructor(
    private dialog: MatDialog,
    private mediaFolder: MediaFolderService,
    private operation: OperationsService) { }

  ngOnInit() {
  }

  createFolder() {
    const dialog = this.dialog.open(CreateFolderDialogComponent, {
      data: {
        parent: this.parentFolder,
      }
    });
    dialog.afterClosed().subscribe(x => {
      if (x) {
        this.invokeCreateFolder(x);
      }
    });
  }

  private invokeCreateFolder(name: string) {
    this.operation.run({
      operation: this.mediaFolder.createFolder(name, this.parentFolder),
      errorMessage: `Error creating folder ${name}`,
    })
  }
}
