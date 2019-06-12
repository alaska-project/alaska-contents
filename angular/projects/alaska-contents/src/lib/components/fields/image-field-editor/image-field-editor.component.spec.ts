import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFieldEditorComponent } from './image-field-editor.component';

describe('ImageFieldEditorComponent', () => {
  let component: ImageFieldEditorComponent;
  let fixture: ComponentFixture<ImageFieldEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageFieldEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFieldEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
