import { Injectable } from '@angular/core';

import { Deal } from '../models/deal';
import { DEAL_DATA } from 'src/app/utils/fake-data';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  getDeals(): Promise<Deal[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DEAL_DATA);
      }, 1000);
    });
  }
}
