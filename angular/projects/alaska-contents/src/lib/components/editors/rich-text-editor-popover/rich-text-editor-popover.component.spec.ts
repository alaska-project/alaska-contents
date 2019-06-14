import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichTextEditorPopoverComponent } from './rich-text-editor-popover.component';

describe('RichTextEditorPopoverComponent', () => {
  let component: RichTextEditorPopoverComponent;
  let fixture: ComponentFixture<RichTextEditorPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichTextEditorPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichTextEditorPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
