import { TestBed } from '@angular/core/testing';

import { PandingChangesService } from './panding-changes.service';

describe('PandingChangesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PandingChangesService = TestBed.get(PandingChangesService);
    expect(service).toBeTruthy();
  });
});
