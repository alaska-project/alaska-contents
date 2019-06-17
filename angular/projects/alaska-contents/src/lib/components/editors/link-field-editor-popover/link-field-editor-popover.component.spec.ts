import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFieldEditorPopoverComponent } from './link-field-editor-popover.component';

describe('LinkFieldEditorPopoverComponent', () => {
  let component: LinkFieldEditorPopoverComponent;
  let fixture: ComponentFixture<LinkFieldEditorPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkFieldEditorPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkFieldEditorPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
