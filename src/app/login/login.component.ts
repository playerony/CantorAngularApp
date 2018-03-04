import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router'
import { JwtHelper } from 'angular2-jwt'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
    private loginForm: FormGroup
    private invalid: boolean

    constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

    ngOnInit() {
        this.invalid = false;
        const jwtHelper = new JwtHelper();
        const token = localStorage.getItem('token');

        if (token && jwtHelper.decodeToken(token).role && !jwtHelper.isTokenExpired(token))
            this.router.navigate(['/currencies']);

        this.loginForm = this.formBuilder.group({
          username: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required])
        });
    }

    onSubmit() {
        this.loginService.getToken(this.username.value, this.password.value).subscribe((data: any) => {
            const token = data.token;
      
            if (token) {
                localStorage.setItem('token', token);
                location.reload();
            }
        }, (error: any) => {
            this.invalid = true;
            this.loginForm.reset();
        });
    }
  
    get username() {
        return this.loginForm.get('username');
    }
  
    get password() {
        return this.loginForm.get('password');
    }

}
