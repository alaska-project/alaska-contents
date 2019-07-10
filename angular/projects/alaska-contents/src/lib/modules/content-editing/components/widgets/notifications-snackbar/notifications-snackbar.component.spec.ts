import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsSnackbarComponent } from './notifications-snackbar.component';

describe('NotificationsSnackbarComponent', () => {
  let component: NotificationsSnackbarComponent;
  let fixture: ComponentFixture<NotificationsSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
