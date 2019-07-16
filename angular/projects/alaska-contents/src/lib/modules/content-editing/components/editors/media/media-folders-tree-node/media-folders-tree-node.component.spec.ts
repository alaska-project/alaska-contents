import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFoldersTreeNodeComponent } from './media-folders-tree-node.component';

describe('MediaFoldersTreeNodeComponent', () => {
  let component: MediaFoldersTreeNodeComponent;
  let fixture: ComponentFixture<MediaFoldersTreeNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaFoldersTreeNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFoldersTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
