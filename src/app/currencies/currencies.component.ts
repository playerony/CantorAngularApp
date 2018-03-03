import { Component, OnInit } from '@angular/core'
import { Currencies } from '../models/currencies.model'
import { CurrenciesService } from '../services/currencies.service'

@Component({
    selector: 'app-currencies',
    templateUrl: './currencies.component.html',
    styleUrls: ['./currencies.component.css'],
    providers: [CurrenciesService]
})
export class CurrenciesComponent implements OnInit {
    private currencies: Currencies

    constructor(private currenciesService: CurrenciesService) {

    }

    ngOnInit() {
        this.currenciesService.fetchCurrencies().subscribe((data: any) => {
            this.currencies.publicationDate = data.publicationDate
            this.currencies.items = data.items
        })
    }

}
