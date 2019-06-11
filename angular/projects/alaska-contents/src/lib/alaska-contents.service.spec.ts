import { TestBed } from '@angular/core/testing';

import { AlaskaContentsService } from './alaska-contents.service';

describe('AlaskaContentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlaskaContentsService = TestBed.get(AlaskaContentsService);
    expect(service).toBeTruthy();
  });
});
