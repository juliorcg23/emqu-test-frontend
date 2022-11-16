import { TestBed } from '@angular/core/testing';

import { TestDetailResolverService } from './test-detail-resolver.service';

describe('TestDetailResolverService', () => {
  let service: TestDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
