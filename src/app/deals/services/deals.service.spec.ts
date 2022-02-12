import { TestBed } from '@angular/core/testing';
import { DEAL_DATA } from 'src/app/utils/fake-data';

import { DealsService } from './deals.service';

describe('DealsService', () => {
  let service: DealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getDeals should get all deals', async () => {
    const expectedDeals = DEAL_DATA;
    const currentDeals = await service.getDeals();

    expect(currentDeals).toEqual(expectedDeals);
  });
});
