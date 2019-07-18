import { Component, OnInit } from '@angular/core';
import { FileData } from '../file-selector-control/file-selector-control.models';

@Component({
  selector: 'aly-images-upload-control',
  templateUrl: './images-upload-control.component.html',
  styleUrls: ['./images-upload-control.component.scss']
})
export class ImagesUploadControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploadFile(event: FileData) {
    console.log(event);
  }
}
