import { Component, OnInit } from '@angular/core'
import { User } from '../models/user.model'
import { UserService } from '../services/user.service'
import { Router } from '@angular/router'
import { JwtHelper } from 'angular2-jwt'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css'],
    providers: [UserService]
})
export class EditComponent implements OnInit {
    private user: User
    private userForm: FormGroup

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {

    }

    ngOnInit() {
        const token = localStorage.getItem('token')
        if(token) {
            const jwtHelper = new JwtHelper()

            if (!jwtHelper.isTokenExpired(token) && jwtHelper.decodeToken(token).role) {
                this.userService.fetchUser(jwtHelper.decodeToken(token).id).subscribe((data: any) => {
                    this.user = data.user;
                    this.userForm = this.formBuilder.group({
                        id: new FormControl(data.user.id, [Validators.required]),
                        login: new FormControl(data.user.username, [Validators.required]),
                        password: new FormControl(''),
                        firstname: new FormControl(data.user.firstname, [Validators.required]),
                        lastname: new FormControl(data.user.lastname, [Validators.required]),
                        balance: new FormControl(data.user.balance, [Validators.required]),
                        email: new FormControl(data.user.email, [Validators.required]),
                    })
                })
            }
        }
    }

    submit() {
        this.userService.saveUser(this.user).subscribe((data: any) => {
            console.log(data);
        });
    }

}
