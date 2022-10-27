import { TestBed } from '@angular/core/testing';

import { DaymealsService } from './daymeals.service';

describe('DaymealsService', () => {
  let service: DaymealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaymealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
