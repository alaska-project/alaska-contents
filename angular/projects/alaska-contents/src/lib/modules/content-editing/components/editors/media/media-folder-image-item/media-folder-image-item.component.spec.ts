import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFolderImageItemComponent } from './media-folder-image-item.component';

describe('MediaFolderImageItemComponent', () => {
  let component: MediaFolderImageItemComponent;
  let fixture: ComponentFixture<MediaFolderImageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaFolderImageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFolderImageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
