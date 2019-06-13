import { TestBed } from '@angular/core/testing';

import { FieldFactoryService } from './field-factory.service';

describe('FieldFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FieldFactoryService = TestBed.get(FieldFactoryService);
    expect(service).toBeTruthy();
  });
});
