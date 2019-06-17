import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFieldEditorComponent } from './link-field-editor.component';

describe('LinkFieldEditorComponent', () => {
  let component: LinkFieldEditorComponent;
  let fixture: ComponentFixture<LinkFieldEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkFieldEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkFieldEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
