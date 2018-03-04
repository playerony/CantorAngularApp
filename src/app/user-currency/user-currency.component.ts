import { Component, OnInit } from '@angular/core';
import { UserCurrencyService } from '../services/userCurrency.service';
import { UserCurrency } from '../models/userCurrency.model';
import { JwtHelper } from 'angular2-jwt';

@Component({
    selector: 'app-user-currency',
    templateUrl: './user-currency.component.html',
    styleUrls: ['./user-currency.component.css'],
    providers: [UserCurrencyService]
})
export class UserCurrencyComponent implements OnInit {
    private userId: number
    private userCurrencies: Array<UserCurrency>

    constructor(private userCurrencyService: UserCurrencyService) { }

    ngOnInit() {
        const token = localStorage.getItem('token')
        if(token) {
            const jwtHelper = new JwtHelper()

            if (!jwtHelper.isTokenExpired(token)) {
                this.userId = jwtHelper.decodeToken(token).id
            }
        }

        this.userCurrencyService.fetchUserCurrencies(this.userId).subscribe((data: any) => {
            this.userCurrencies = data
        })
    }

}
