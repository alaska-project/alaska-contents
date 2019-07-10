import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkEditorModalComponent } from './link-editor-modal.component';

describe('LinkEditorModalComponent', () => {
  let component: LinkEditorModalComponent;
  let fixture: ComponentFixture<LinkEditorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkEditorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
