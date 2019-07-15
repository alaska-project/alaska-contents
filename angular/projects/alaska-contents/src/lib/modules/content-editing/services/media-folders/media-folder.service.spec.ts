import { TestBed } from '@angular/core/testing';

import { MediaFolderService } from './media-folder.service';

describe('MediaFolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaFolderService = TestBed.get(MediaFolderService);
    expect(service).toBeTruthy();
  });
});
