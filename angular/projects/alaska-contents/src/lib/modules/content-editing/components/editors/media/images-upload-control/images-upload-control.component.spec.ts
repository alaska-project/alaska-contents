import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesUploadControlComponent } from './images-upload-control.component';

describe('ImagesUploadControlComponent', () => {
  let component: ImagesUploadControlComponent;
  let fixture: ComponentFixture<ImagesUploadControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesUploadControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesUploadControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
