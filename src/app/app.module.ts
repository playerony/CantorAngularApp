import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { UserCurrencyDetailsComponent } from './user-currency-details/user-currency-details.component';
import { UserCurrencyComponent } from './user-currency/user-currency.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    EditComponent,
    CurrenciesComponent,
    CurrencyDetailsComponent,
    UserCurrencyDetailsComponent,
    UserCurrencyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
