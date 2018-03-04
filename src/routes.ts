import { Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { CurrencyDetailsComponent } from './app/currency-details/currency-details.component';
import { LoggedGuard } from './app/guards/logged.guard';
import { CurrenciesComponent } from './app/currencies/currencies.component';
import { EditComponent } from './app/edit/edit.component';
import { UserCurrencyComponent } from './app/user-currency/user-currency.component';
import { UserCurrencyDetailsComponent } from './app/user-currency-details/user-currency-details.component';
import { RegisterComponent } from './app/register/register.component';
import { UserPanelComponent } from './app/user-panel/user-panel.component';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'panel', component: UserPanelComponent },
    { path: 'currencies', component: CurrenciesComponent, canActivate: [LoggedGuard] },
    { path: 'currency/:code', component: CurrencyDetailsComponent, canActivate: [LoggedGuard] },
    { path: 'userCurrency', component: UserCurrencyComponent, canActivate: [LoggedGuard] },
    { path: 'userCurrencyDetail', component: UserCurrencyDetailsComponent, canActivate: [LoggedGuard] },
    { path: 'edit/:id', component: EditComponent, canActivate: [LoggedGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];