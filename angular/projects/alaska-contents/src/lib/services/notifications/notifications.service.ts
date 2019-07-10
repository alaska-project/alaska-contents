import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationsSnackbarComponent } from '../../components/widgets/notifications-snackbar/notifications-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private snackBar: MatSnackBar) { }
  
  showNotificationMessage(message: string): any {
    this.snackBar.openFromComponent(NotificationsSnackbarComponent, {
      duration: 2000,
      panelClass: 'primary-background',
      data: {
        type: 'info',
        message: message,
      }
    });
  }

  showError(errorMessage: string, error: any): any {
    this.snackBar.openFromComponent(NotificationsSnackbarComponent, {
      duration: 2000,
      panelClass: 'danger-background',
      data: {
        type: 'error',
        message: errorMessage,
        details: error,
      }
    });
  }  
}
