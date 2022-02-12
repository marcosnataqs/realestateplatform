import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Deal } from '../deals/models/deal';

@Injectable({
  providedIn: 'root',
})
export class DealsStoreService {
  private readonly _deals = new BehaviorSubject<Deal[]>([]);
  private idCounter = 0;

  constructor() {
    this.setDeals([]);
  }

  private get deals(): Deal[] {
    return this._deals.getValue();
  }

  private set deals(val: Deal[]) {
    this._deals.next(val);
  }

  setDeals(deals: Deal[]) {
    this.deals = deals.map((deal) => {
      deal.id = this.idCounter;
      this.idCounter++;
      return deal;
    });
  }

  setDeal(deal: Deal) {
    const newDeal = { ...deal, id: this.idCounter };
    this.idCounter++;
    this.deals = [...this.deals, newDeal];
  }

  removeDeal(deal: Deal) {
    this.deals = this.deals.filter((d) => d.id !== deal.id);
  }

  // Expose the observable$ part of the _deals subject (read only stream)
  readonly deals$ = this._deals.asObservable();
}
