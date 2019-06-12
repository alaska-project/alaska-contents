import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldEditorComponent } from './text-field-editor.component';

describe('TextFieldEditorComponent', () => {
  let component: TextFieldEditorComponent;
  let fixture: ComponentFixture<TextFieldEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFieldEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
