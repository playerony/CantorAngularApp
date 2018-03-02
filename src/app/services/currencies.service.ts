import { Injectable } from '@angular/core'
import { Http, Response, RequestOptions, Headers, ResponseOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class CurrenciesService {
    private apiUrl = 'http://webtask.future-processing.com:8068'

    constructor(private http: Http) {

    }

    fetchCurrencies(): Observable<any> {
        return this.http.post(this.apiUrl + '/currencies', new ResponseOptions())
                        .map((res: Response) => res.json())
                        .catch((err: any) => Observable.throw(err.json() || 'Server error'))
    }

}