import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHeadListComponent } from './accounthead-list.component';

describe('AccountHeadListComponent', () => {
  let component: AccountHeadListComponent;
  let fixture: ComponentFixture<AccountHeadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountHeadListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountHeadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
