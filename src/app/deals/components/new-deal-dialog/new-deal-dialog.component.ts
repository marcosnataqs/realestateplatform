import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DealsComponent } from '../../deals.component';
import { Deal } from '../../models/deal';

@Component({
  selector: 'app-new-deal-dialog',
  templateUrl: './new-deal-dialog.component.html',
  styleUrls: ['./new-deal-dialog.component.scss'],
})
export class NewDealDialogComponent {
  capRateFormatted: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<DealsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Deal
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  // Calculate the cap rate with the formula: NOI / Price (%)
  calculateCapRate(): void {
    if (this.data.netOperatingIncome > 0 && this.data.purchasePrice > 0) {
      this.data.capRate =
        this.data.netOperatingIncome / this.data.purchasePrice;
      this.capRateFormatted = this.data.capRate * 100;
    } else {
      this.data.capRate = null;
      this.capRateFormatted = null;
    }
  }
}
