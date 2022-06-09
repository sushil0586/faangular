import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorderAddComponent } from './purchaseorder-add.component';

describe('PurchaseorderAddComponent', () => {
  let component: PurchaseorderAddComponent;
  let fixture: ComponentFixture<PurchaseorderAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseorderAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseorderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
