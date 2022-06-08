import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHeadAddComponent } from './accounthead-add.component';

describe('AccountHeadAddComponent', () => {
  let component: AccountHeadAddComponent;
  let fixture: ComponentFixture<AccountHeadAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountHeadAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountHeadAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
