import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFolderExplorerComponent } from './media-folder-explorer.component';

describe('MediaFolderExplorerComponent', () => {
  let component: MediaFolderExplorerComponent;
  let fixture: ComponentFixture<MediaFolderExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaFolderExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFolderExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
