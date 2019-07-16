import { TestBed } from '@angular/core/testing';

import { MediaFoldersEditorService } from './media-folders-editor.service';

describe('MediaFoldersEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaFoldersEditorService = TestBed.get(MediaFoldersEditorService);
    expect(service).toBeTruthy();
  });
});
