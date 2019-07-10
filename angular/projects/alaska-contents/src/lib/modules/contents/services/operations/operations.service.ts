import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(
    private ngZone: NgZone,
    private loadingService: LoaderService,
    private notifications: NotificationsService) { }

  async run<TResult>(operation: OperationWithResult<TResult>) {

    const promise = this.getPromise(operation.operation);
    const loader = this.loadingService.showLoader();
    try {
      const result = await promise;
      // if (operation.callback) {
      //   operation.callback(result);
      // }
      this.invokeCallback(result, operation.callback);
      if (operation.notificationMessage) {
        this.showNotification(operation.notificationMessage);
      }
      return result;
    } catch (error) {
      this.handleError(error, operation.errorCallback, operation.errorMessage);
    } finally {
      loader.dismiss();
    }
  }

  private getPromise<T>(operation: Promise<T> | Observable<T>) {
    if (operation instanceof Observable) {
      return (<Observable<T>>operation).toPromise();
    }
    return <Promise<T>>operation;
  }

  private invokeCallback<T>(result: T, callback?: (result: T) => void) {
    if (callback) {
      this.ngZone.run(() => callback(result));
    }
  }

  private handleError(error: any, errorCallback?: (error: any) => void, errorMessage?: string) {

    if (errorCallback) {
      this.ngZone.run(() => errorCallback(error));
    }

    if (!errorMessage) {
      errorMessage = 'Generic Error';
    }
    this.notifications.showError(errorMessage, error);
  }

  private showNotification(message: string) {
    this.notifications.showNotificationMessage(message);
  }
}

export interface Operation {
  operation: Promise<void> | Observable<void>;
  callback?: () => void;
  errorCallback?: (error: any) => void;
  errorMessage?: string;
  motification?: string;
}

export interface OperationWithResult<T> {
  operation: Promise<T> | Observable<T>;
  callback?: (result: T) => void;
  errorCallback?: (error: any) => void;
  errorMessage?: string;
  notificationMessage?: string;
}
