import { TestBed } from '@angular/core/testing';

import { FieldResolverService } from './field-resolver.service';

describe('FieldResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FieldResolverService = TestBed.get(FieldResolverService);
    expect(service).toBeTruthy();
  });
});
