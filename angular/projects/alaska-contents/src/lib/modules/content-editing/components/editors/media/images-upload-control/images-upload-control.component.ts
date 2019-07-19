import { Component, OnInit, Input } from '@angular/core';
import { FileData } from '../file-selector-control/file-selector-control.models';
import { MediaFolder } from '../../../../clients/media-library.clients';
import { MediaFoldersEditorService } from '../../../../services/media-folders-editor/media-folders-editor.service';

@Component({
  selector: 'aly-images-upload-control',
  templateUrl: './images-upload-control.component.html',
  styleUrls: ['./images-upload-control.component.scss']
})
export class ImagesUploadControlComponent implements OnInit {

  @Input()
  folder: MediaFolder;
  
  constructor(private mediaFolderService: MediaFoldersEditorService) { }

  ngOnInit() {
  }

  uploadFile(file: FileData) {
    this.mediaFolderService.uploadMedia(file, this.folder);
  }
}
