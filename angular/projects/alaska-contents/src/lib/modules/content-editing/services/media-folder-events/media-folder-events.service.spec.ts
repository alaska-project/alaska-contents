import { TestBed } from '@angular/core/testing';

import { MediaFolderEventsService } from './media-folder-events.service';

describe('MediaFolderEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaFolderEventsService = TestBed.get(MediaFolderEventsService);
    expect(service).toBeTruthy();
  });
});
