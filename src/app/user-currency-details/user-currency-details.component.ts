import { Component, OnInit } from '@angular/core';
import { UserCurrency } from '../models/userCurrency.model';
import { UserCurrencyService } from '../services/userCurrency.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CurrenciesService } from '../services/currencies.service';
import { Currencies } from '../models/currencies.model';
import { JwtHelper } from 'angular2-jwt';

@Component({
    selector: 'app-user-currency-details',
    templateUrl: './user-currency-details.component.html',
    styleUrls: ['./user-currency-details.component.css'],
    providers: [UserCurrencyService, CurrenciesService]
})
export class UserCurrencyDetailsComponent implements OnInit {
    private userCurrency: UserCurrency
    private userId: number
    private currencies: Currencies

    constructor(private userCurrencyService: UserCurrencyService, private currenciesService: CurrenciesService,
                private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id']
            if(id) {
                this.userCurrencyService.fetchUserCurrency(id).subscribe((data: any) => {
                    this.userCurrency = data
                })

                this.currenciesService.fetchCurrencies().subscribe((data: any) => {
                    this.currencies.publicationDate = data.publicationDate
                    this.currencies.items = data.items
                })

                let element = this.currencies.items.map(arr => {
                    arr.code == this.userCurrency.currencyCode
                })

                for(let i=0 ; i<this.currencies.items.length ; i++) {
                    if(this.currencies[i].code == this.userCurrency.currencyCode) {
                        this.userCurrency.sellPrice = this.currencies[i].sellPrice
                    }
                }
            }
        })

        const token = localStorage.getItem('token')
        if(token) {
            const jwtHelper = new JwtHelper()

            if (!jwtHelper.isTokenExpired(token)) {
                this.userId = jwtHelper.decodeToken(token).id
            }
        }
    }

    sell() {
        if(confirm("Do you really want to sell " + this.userCurrency.currencyCode + "?")) {
            let userCurrency: UserCurrency
            userCurrency.userCurrencyId = this.userCurrency.userCurrencyId
            userCurrency.userId = this.userCurrency.userId
            userCurrency.currencyCode = this.userCurrency.currencyCode
            userCurrency.currencyAmount = 1

            this.userCurrencyService.sellUserCurrency(userCurrency).subscribe((data: any) => {
                console.log(data);
            })
        }
    }

}
