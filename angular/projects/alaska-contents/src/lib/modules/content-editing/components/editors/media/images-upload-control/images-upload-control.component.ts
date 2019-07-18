import { Component, OnInit, Input } from '@angular/core';
import { FileData } from '../file-selector-control/file-selector-control.models';
import { MediaFolderService } from '../../../../services/media-folders/media-folder.service';
import { MediaFolder } from '../../../../clients/media-library.clients';

@Component({
  selector: 'aly-images-upload-control',
  templateUrl: './images-upload-control.component.html',
  styleUrls: ['./images-upload-control.component.scss']
})
export class ImagesUploadControlComponent implements OnInit {

  @Input()
  folder: MediaFolder;
  
  constructor(private mediaFolderService: MediaFolderService) { }

  ngOnInit() {
  }

  uploadFile(file: FileData) {
    this.mediaFolderService.uploadMedia(file, this.folder);
  }
}
