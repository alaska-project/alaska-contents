import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFoldersTreeNodeMenuComponent } from './media-folders-tree-node-menu.component';

describe('MediaFoldersTreeNodeMenuComponent', () => {
  let component: MediaFoldersTreeNodeMenuComponent;
  let fixture: ComponentFixture<MediaFoldersTreeNodeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaFoldersTreeNodeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFoldersTreeNodeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
