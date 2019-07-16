import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFoldersPanelComponent } from './media-folders-panel.component';

describe('MediaFoldersPanelComponent', () => {
  let component: MediaFoldersPanelComponent;
  let fixture: ComponentFixture<MediaFoldersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaFoldersPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFoldersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
