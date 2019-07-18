import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFolderImageSelectorComponent } from './media-folder-image-selector.component';

describe('MediaFolderImageSelectorComponent', () => {
  let component: MediaFolderImageSelectorComponent;
  let fixture: ComponentFixture<MediaFolderImageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaFolderImageSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFolderImageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
