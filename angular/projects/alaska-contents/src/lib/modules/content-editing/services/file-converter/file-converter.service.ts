import { Injectable } from '@angular/core';
import { FileData } from '../../components/editors/media/file-selector-control/file-selector-control.models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileConverterService {

  constructor() { }

  getContentType(content: FileData) {
    return content.content.type;
  }

  getEncodedContent(content: FileData) {
    return this.getBlobContent(content.content);
  }

  private getBlobContent(blob: Blob) {
    const promise = new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (function(theFile) {
        return function(e) {
          const binaryData = e.target.result;
          const base64String = window.btoa(binaryData);
          resolve(base64String);
        };
      })(blob);
      reader.readAsBinaryString(blob);
    });
    
    return promise;
  }
}
