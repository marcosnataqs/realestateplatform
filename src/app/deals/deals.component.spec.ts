import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { DealsComponent } from './deals.component';

describe('DealsComponent', () => {
  let component: DealsComponent;
  let fixture: ComponentFixture<DealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealsComponent],
      providers: [{ provide: MatDialog, useValue: [] }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
