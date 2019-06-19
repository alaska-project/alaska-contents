import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichTextEditorModalComponent } from './rich-text-editor-modal.component';

describe('RichTextEditorModalComponent', () => {
  let component: RichTextEditorModalComponent;
  let fixture: ComponentFixture<RichTextEditorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichTextEditorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichTextEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
