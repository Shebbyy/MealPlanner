import { TestBed } from '@angular/core/testing';

import { PreviewGathererService } from './preview-gatherer.service';

describe('PreviewGathererService', () => {
  let service: PreviewGathererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviewGathererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
