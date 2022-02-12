import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { RemoveDealDialogComponent } from '../remove-deal-dialog/remove-deal-dialog.component';
import { DealsStoreService } from 'src/app/store/deals-store.service';
import { Deal } from '../../models/deal';

@Component({
  selector: 'app-deals-table',
  templateUrl: './deals-table.component.html',
  styleUrls: ['./deals-table.component.scss'],
})
export class DealsTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'adress',
    'purchasePrice',
    'netOperatingIncome',
    'capRate',
    'star',
  ];
  dataSource: MatTableDataSource<Deal> = new MatTableDataSource<Deal>();
  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private dealsStore: DealsStoreService,
    public dialog: MatDialog
  ) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.dataSource.sort.sortChange.subscribe(
      () => (this.paginator.pageIndex = 0)
    );
  }

  ngOnInit(): void {
    this.getDeals();
  }

  getDeals(): void {
    this.dealsStore.deals$.subscribe((deals) => {
      this.resultsLength = deals.length;
      this.dataSource.data = deals;
      this.isLoadingResults = false;
    });
  }

  openRemoveDealDialog(data: Deal): void {
    const dialogRef = this.dialog.open(RemoveDealDialogComponent, {
      minWidth: '400px',
      maxWidth: '500px',
      width: '100%',
      data: data,
    });

    dialogRef.afterClosed().subscribe((deal: Deal) => {
      if (deal) {
        this.dealsStore.removeDeal(deal);
      }
    });
  }
}
