import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { UserCurrency } from '../models/userCurrency.model'

@Injectable()
export class UserCurrencyService {
    private apiUrl = 'http://localhost:8080/cantor/userCurrency'
    private headers: Headers
    private requestOptions: RequestOptions

    constructor(private http: Http) {
        this.headers = new Headers()
        this.headers.append('Authorization', localStorage.getItem('token'))
        this.requestOptions = new RequestOptions({ headers: this.headers })
    }

    fetchUserCurrencies(userId: number): Observable<any> {
        return this.http.get(this.apiUrl + '/all/' + userId, this.requestOptions)
                        .map((res: Response) => res.json())
                        .catch((err: any) => Observable.throw(err.json() || 'Server error'))
    }

    fetchUserCurrency(userCurrencyId: number): Observable<any> {
        return this.http.get(this.apiUrl + '/' + userCurrencyId, this.requestOptions)
                        .map((res: Response) => res.json())
                        .catch((err: any) => Observable.throw(err.json() || 'Server error'))
    }

    saveUserCurrency(userCurrency: UserCurrency): Observable<any> {
        return this.http.post(this.apiUrl, userCurrency, this.requestOptions)
                        .map((res: Response) => res.json())
    }

    buyUserCurrency(userCurrency: UserCurrency): Observable<any> {
        return this.http.post(this.apiUrl + '/buy', userCurrency, this.requestOptions)
                        .map((res: Response) => res.json())
    }

    sellUserCurrency(userCurrency: UserCurrency): Observable<any> {
        return this.http.post(this.apiUrl + '/sell', userCurrency, this.requestOptions)
                        .map((res: Response) => res.json())
    }

}