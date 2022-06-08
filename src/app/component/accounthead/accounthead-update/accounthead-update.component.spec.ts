import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountHeadUpdateComponent } from './accounthead-update.component';

describe('AccountHeadUpdateComponent', () => {
  let component: AccountHeadUpdateComponent;
  let fixture: ComponentFixture<AccountHeadUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountHeadUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountHeadUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
