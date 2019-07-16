import { Component, OnInit, Input } from '@angular/core';
import { MediaFolder } from '../../../../clients/media-library.clients';
import { MediaFoldersEditorService } from '../../../../services/media-folders-editor/media-folders-editor.service';

@Component({
  selector: 'aly-create-folder-button',
  templateUrl: './create-folder-button.component.html',
  styleUrls: ['./create-folder-button.component.scss']
})
export class CreateFolderButtonComponent implements OnInit {

  @Input()
  parentFolder: MediaFolder;

  constructor(private mediaFoldersEditorService: MediaFoldersEditorService) { }

  ngOnInit() {
  }

  createFolder() {
    this.mediaFoldersEditorService.createFolder(this.parentFolder);
  }
}
