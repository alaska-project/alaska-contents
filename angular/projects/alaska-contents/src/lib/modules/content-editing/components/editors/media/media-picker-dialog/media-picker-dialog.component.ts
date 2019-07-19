import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MediaPickerData } from './media-picker-dialog.models';
import { MediaFolderService } from '../../../../services/media-folders/media-folder.service';
import { Subscription } from 'rxjs';
import { MediaContent } from '../../../../clients/media-library.clients';

@Component({
  selector: 'aly-media-picker-dialog',
  templateUrl: './media-picker-dialog.component.html',
  styleUrls: ['./media-picker-dialog.component.scss']
})
export class MediaPickerDialogComponent implements OnInit, OnDestroy {

  private mediaConfirmedSub: Subscription;
  private mediaDiscardedSub: Subscription;

  constructor(
    private dialogRef: MatDialogRef<MediaPickerDialogComponent>,
    private mediaFolderService: MediaFolderService,
    @Inject(MAT_DIALOG_DATA) private data: MediaPickerData
  ) { }

  ngOnInit() {
    this.mediaConfirmedSub = this.mediaFolderService.mediaConfirmed().subscribe(x => this.confirm(x.media));
    this.mediaDiscardedSub = this.mediaFolderService.mediaDiscarded().subscribe(x => this.dialogRef.close());
  }

  ngOnDestroy(): void {
    this.mediaConfirmedSub.unsubscribe();
  }

  private confirm(media: MediaContent) {
    this.dialogRef.close(media);
  }
}
