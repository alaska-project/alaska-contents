import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFoldersTreeComponent } from './media-folders-tree.component';

describe('MediaFoldersTreeComponent', () => {
  let component: MediaFoldersTreeComponent;
  let fixture: ComponentFixture<MediaFoldersTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaFoldersTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFoldersTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
