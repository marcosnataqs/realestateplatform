import { TestBed } from '@angular/core/testing';

import { DealsStoreService } from './deals-store.service';
import { DEAL_DATA } from '../utils/fake-data';
import { Deal } from '../deals/models/deal';

describe('DealsStoreService', () => {
  let service: DealsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#setDeals should add an array of deals', () => {
    const deals = DEAL_DATA;
    const addedDeals: Deal[] = [];

    service.deals$.subscribe((deals) => addedDeals.push(...deals));
    service.setDeals(deals);

    expect(addedDeals).toEqual(deals);
  });

  it('#setDeal should add a deal', () => {
    const deal: Deal = {
      id: 0,
      name: 'Dolor Quam Elementum',
      address: 'Ap 714-581 Et St.',
      purchasePrice: 3510376,
      netOperatingIncome: 236203,
      capRate: 0.06,
    };
    const addedDeals: Deal[] = [];

    service.deals$.subscribe((deals) => addedDeals.push(...deals));
    service.setDeal(deal);

    expect(addedDeals).toEqual([deal]);
  });

  it('#removeDeal should remove a deal', () => {
    const deals = DEAL_DATA;
    let currentDeals: Deal[] = [];
    let dealToRemove: Deal;
    let result;

    // Add all deals
    service.deals$.subscribe((deals) => (currentDeals = deals));
    service.setDeals(deals);

    // Remove first deal
    dealToRemove = deals[0];
    service.removeDeal(dealToRemove);

    // Check if deal was removed
    result = currentDeals.find((deal) => deal.id === dealToRemove.id);

    expect(result).toEqual(undefined);
  });
});
