import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorderListComponent } from './purchaseorder-list.component';

describe('PurchaseorderListComponent', () => {
  let component: PurchaseorderListComponent;
  let fixture: ComponentFixture<PurchaseorderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseorderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseorderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
