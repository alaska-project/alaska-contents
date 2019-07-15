import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPickerDialogComponent } from './media-picker-dialog.component';

describe('MediaPickerDialogComponent', () => {
  let component: MediaPickerDialogComponent;
  let fixture: ComponentFixture<MediaPickerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaPickerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
