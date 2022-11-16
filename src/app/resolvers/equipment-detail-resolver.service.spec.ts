import { TestBed } from '@angular/core/testing';

import { EquipmentDetailResolverService } from './equipment-detail-resolver.service';

describe('EquipmentDetailResolverService', () => {
  let service: EquipmentDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
