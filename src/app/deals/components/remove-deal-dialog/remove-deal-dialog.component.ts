import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DealsTableComponent } from '../deals-table/deals-table.component';
import { Deal } from '../../models/deal';

@Component({
  selector: 'app-remove-deal-dialog',
  templateUrl: './remove-deal-dialog.component.html',
  styleUrls: ['./remove-deal-dialog.component.scss'],
})
export class RemoveDealDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DealsTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Deal
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
