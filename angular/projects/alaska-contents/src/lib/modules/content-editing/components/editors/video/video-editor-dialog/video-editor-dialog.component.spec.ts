import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEditorDialogComponent } from './video-editor-dialog.component';

describe('VideoEditorDialogComponent', () => {
  let component: VideoEditorDialogComponent;
  let fixture: ComponentFixture<VideoEditorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoEditorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
