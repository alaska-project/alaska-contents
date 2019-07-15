import { Component, OnInit, Input } from '@angular/core';
import { MediaLibraryClient } from '../../../../clients/media-library.clients';
import { ImageFieldData } from '@alaska-project/contents-core/dist/types/models/content-models';

@Component({
  selector: 'aly-media-picker',
  templateUrl: './media-picker.component.html',
  styleUrls: ['./media-picker.component.scss']
})
export class MediaPickerComponent implements OnInit {

  @Input() imageData: ImageFieldData;

  constructor() { }

  ngOnInit() {
  }



}
