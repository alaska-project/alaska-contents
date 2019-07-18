import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FileData } from './file-selector-control.models';

@Component({
  selector: 'aly-file-selector-control',
  templateUrl: './file-selector-control.component.html',
  styleUrls: ['./file-selector-control.component.scss']
})
export class FileSelectorControlComponent implements OnInit {

  @Output()
  fileSelected = new EventEmitter<FileData>();

  @ViewChild('file', { static: false })
  file: any;

  constructor() { }

  ngOnInit() {
  }

  selectFile() {
    this._openBrowserFileSelector();
  }

  onBrowserFileSelected() {
    const files = this.file.nativeElement.files;
    if (files.length === 0) {
      return;
    }
    const file = <File>files[0];
    this.fileSelected.next({
      name: file.name,
      content: file,
    });
  }

  private _openBrowserFileSelector() {
    this.file.nativeElement.click();
  }
}
