import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCurrencyDetailsComponent } from './user-currency-details.component';

describe('UserCurrencyDetailsComponent', () => {
  let component: UserCurrencyDetailsComponent;
  let fixture: ComponentFixture<UserCurrencyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCurrencyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCurrencyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
