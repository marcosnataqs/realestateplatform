import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DealsStoreService } from '../store/deals-store.service';

import { NewDealDialogComponent } from './components/new-deal-dialog/new-deal-dialog.component';
import { DealsService } from './services/deals.service';
import { Deal } from './models/deal';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private dealsService: DealsService,
    private dealsStore: DealsStoreService
  ) {}

  ngOnInit(): void {
    this.getDeals();
  }

  async getDeals(): Promise<void> {
    const deals = await this.dealsService.getDeals();
    this.dealsStore.setDeals(deals);
  }

  openNewDealDialog(): void {
    const dialogRef = this.dialog.open(NewDealDialogComponent, {
      minWidth: '400px',
      maxWidth: '600px',
      width: '100%',
      data: {
        name: '',
        address: '',
        purchasePrice: null,
        netOperatingIncome: null,
        capRate: null,
      },
    });

    dialogRef.afterClosed().subscribe((deal: Deal) => {
      if (deal) {
        this.dealsStore.setDeal(deal);
      }
    });
  }
}
