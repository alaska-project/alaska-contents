import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MediaPickerData } from './media-picker-dialog.models';
import { Subscription } from 'rxjs';
import { MediaContent } from '../../../../clients/media-library.clients';
import { MediaFolderEventsService } from '../../../../services/media-folder-events/media-folder-events.service';

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
    private mediaFolderService: MediaFolderEventsService,
    @Inject(MAT_DIALOG_DATA) private data: MediaPickerData
  ) { }

  ngOnInit() {
    this.mediaConfirmedSub = this.mediaFolderService.mediaConfirmed().subscribe(x => this.confirm(x.media));
    this.mediaDiscardedSub = this.mediaFolderService.mediaDiscarded().subscribe(x => this.dialogRef.close());
  }

  ngOnDestroy(): void {
    this.mediaConfirmedSub.unsubscribe();
    this.mediaDiscardedSub.unsubscribe();
  }

  private confirm(media: MediaContent) {
    this.dialogRef.close(media);
  }
}
