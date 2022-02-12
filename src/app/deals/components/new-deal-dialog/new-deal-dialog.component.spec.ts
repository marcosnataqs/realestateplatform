import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NewDealDialogComponent } from './new-deal-dialog.component';

describe('NewDealDialogComponent', () => {
  let component: NewDealDialogComponent;
  let fixture: ComponentFixture<NewDealDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [NewDealDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: [] },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDealDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#calculateCapRate should correctly calculate cap rate', () => {
    component.data.purchasePrice = 1000000;
    component.data.netOperatingIncome = 100000;
    component.calculateCapRate(); // netOperatingIncome / purchasePrice
    expect(component.data.capRate).toBe(0.1);
  });
});
