import { Currency } from './currency.model'

export interface Currencies {
    publicationDate: Date;
    items: Array<Currency>;
}