import { TestBed } from '@angular/core/testing';

import { ContentsService } from './contents.service';

describe('ContentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentsService = TestBed.get(ContentsService);
    expect(service).toBeTruthy();
  });
});
