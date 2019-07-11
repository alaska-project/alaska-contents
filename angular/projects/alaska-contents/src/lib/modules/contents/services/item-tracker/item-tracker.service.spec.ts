import { TestBed } from '@angular/core/testing';

import { ItemTrackerService } from './item-tracker.service';

describe('ItemTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemTrackerService = TestBed.get(ItemTrackerService);
    expect(service).toBeTruthy();
  });
});
