import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCurrencyComponent } from './user-currency.component';

describe('UserCurrencyComponent', () => {
  let component: UserCurrencyComponent;
  let fixture: ComponentFixture<UserCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
