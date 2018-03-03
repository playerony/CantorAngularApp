import { Component, OnInit } from '@angular/core'
import { JwtHelper } from 'angular2-jwt'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private logged: boolean

    constructor() { 
      
    }

    ngOnInit() {
        this.logged = false
        const jwtHelper = new JwtHelper();
        const token = localStorage.getItem('token');

        if (token && jwtHelper.decodeToken(token).role && !jwtHelper.isTokenExpired(token)) 
            this.logged = true;
    }

    logout() {
        localStorage.removeItem('token');
        location.reload();
    }

}
