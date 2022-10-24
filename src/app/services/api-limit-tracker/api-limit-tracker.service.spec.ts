import { TestBed } from '@angular/core/testing';

import { ApiLimitTrackerService } from './api-limit-tracker.service';

describe('ApiLimitTrackerService', () => {
  let service: ApiLimitTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLimitTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
