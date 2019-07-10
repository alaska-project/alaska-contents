import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'aly-notifications-snackbar',
  templateUrl: './notifications-snackbar.component.html',
  styleUrls: ['./notifications-snackbar.component.scss']
})
export class NotificationsSnackbarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
  }

}
