import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { DealsTableComponent } from './deals-table.component';

describe('DealsTableComponent', () => {
  let component: DealsTableComponent;
  let fixture: ComponentFixture<DealsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSortModule],
      declarations: [DealsTableComponent],
      providers: [{ provide: MatDialog, useValue: [] }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
