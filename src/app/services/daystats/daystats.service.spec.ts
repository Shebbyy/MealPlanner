import { TestBed } from '@angular/core/testing';

import { DaystatsService } from './daystats.service';

describe('DaystatsService', () => {
  let service: DaystatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaystatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
