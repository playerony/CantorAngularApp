import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../models/currency.model';
import { UserCurrency } from '../models/userCurrency.model';
import { ActivatedRoute } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCurrencyService } from '../services/userCurrency.service';

@Component({
    selector: 'app-currency-details',
    templateUrl: './currency-details.component.html',
    styleUrls: ['./currency-details.component.css'],
    providers: [UserCurrencyService],
})
export class CurrencyDetailsComponent implements OnInit {
    private userId: number
    @Input() private currency: Currency

    constructor(private userCurrencyService: UserCurrencyService,
                private formBuilder: FormBuilder, private router: Router) { }

    ngOnInit() {
        const token = localStorage.getItem('token')
        if (token) {
            const jwtHelper = new JwtHelper()
            if (!jwtHelper.isTokenExpired(token)) {
                this.userId = jwtHelper.decodeToken(token).id;
            }
        }
    }

    buy() {
        if(confirm("Do you really want to buy " + this.currency.code + "?")) {
            let userCurrency: UserCurrency
            userCurrency.userCurrencyId = null
            userCurrency.userId = this.userId
            userCurrency.currencyCode = this.currency.code
            userCurrency.currencyAmount = 1

            let userCurrencies = this.userCurrencyService.fetchUserCurrencies(this.userId)
            let element = userCurrencies.map(arr => 
                                { return arr.find(item => item.currencyCode == this.currency.code )})

            if (element != null) {
                element.subscribe(item => { userCurrency.userCurrencyId = item.userCurrencyId })

                this.userCurrencyService.buyUserCurrency(userCurrency).subscribe((data: any) => {
                    console.log(data);
                })
            } else {
                this.userCurrencyService.saveUserCurrency(userCurrency).subscribe((data: any) => {
                    console.log(data);
                })
            }
        }
    }

}
