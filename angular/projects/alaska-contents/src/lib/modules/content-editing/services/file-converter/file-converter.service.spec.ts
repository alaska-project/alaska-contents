import { TestBed } from '@angular/core/testing';

import { FileConverterService } from './file-converter.service';

describe('FileConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileConverterService = TestBed.get(FileConverterService);
    expect(service).toBeTruthy();
  });
});
