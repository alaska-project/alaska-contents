import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlFieldEditorComponent } from './html-field-editor.component';

describe('HtmlFieldEditorComponent', () => {
  let component: HtmlFieldEditorComponent;
  let fixture: ComponentFixture<HtmlFieldEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlFieldEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlFieldEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
