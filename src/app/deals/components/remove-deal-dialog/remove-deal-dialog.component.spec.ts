import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { RemoveDealDialogComponent } from './remove-deal-dialog.component';

describe('RemoveDealDialogComponent', () => {
  let component: RemoveDealDialogComponent;
  let fixture: ComponentFixture<RemoveDealDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveDealDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: [] },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDealDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
