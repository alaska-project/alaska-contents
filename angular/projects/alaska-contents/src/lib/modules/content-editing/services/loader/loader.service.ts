import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoaderDialogContentComponent } from '../../components/widgets/loader-dialog-content/loader-dialog-content.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private dialog: MatDialog) { }

  showLoader(): any {
    const loader = new Loader(this.dialog);
    loader.show();
    return loader;
  }  
}

export class Loader {
  
  private dialogInstance: MatDialogRef<any>;

  constructor(
    private dialog: MatDialog) {}
  
  show() {
    this.dialogInstance = this.dialog.open(LoaderDialogContentComponent);
  }

  dismiss() {
    this.dialogInstance.close();
  }
}
