import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { User } from '../models/user.model'

@Injectable()
export class UserService {
    private apiUrl = 'http://localhost:8080/cantor/user'
    private headers: Headers
    private requestOptions: RequestOptions

    constructor(private http: Http) {
        this.headers = new Headers()
        this.headers.append('Authorization', localStorage.getItem('token'))
        this.requestOptions = new RequestOptions({ headers: this.headers })
    }

    fetchUsers(): Observable<any> {
        return this.http.get(this.apiUrl, this.requestOptions)
                        .map((res: Response) => res.json())
                        .catch((err: any) => Observable.throw(err.json() || 'Server error'))
    }

    fetchUser(id: number): Observable<any> {
        return this.http.get(this.apiUrl + '/' + id, this.requestOptions)
                        .map((res: Response) => res.json())
                        .catch((err: any) => Observable.throw(err.json() || 'Server error'))
    }

    saveUser(user: User): Observable<any> {
        return this.http.post(this.apiUrl, user, this.requestOptions)
                        .map((res: Response) => res.json())
    }

    updateUser(user: User, id: number): Observable<any> {
        return this.http.put(this.apiUrl + '/' + id, user, this.requestOptions)
                        .map((res: Response) => res.json())
    }

    removeUser(id: number) {
        return this.http.delete(this.apiUrl + '/' + id, this.requestOptions)
                        .map((res: Response) => res.json())
    }

}