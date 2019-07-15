import { TestBed } from '@angular/core/testing';

import { DefaultMediaEditorService } from './default-media-editor.service';

describe('DefaultMediaEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultMediaEditorService = TestBed.get(DefaultMediaEditorService);
    expect(service).toBeTruthy();
  });
});
