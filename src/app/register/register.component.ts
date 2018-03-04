import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [UserService]
})
export class RegisterComponent implements OnInit {
    private userForm: FormGroup

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            id: new FormControl(''),
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            firstname: new FormControl('', [Validators.required]),
            lastname: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            balance: new FormControl('', [Validators.required])
        })
    }

    submit() {
        const user: User = {
            userId: this.id.value,
            username: this.username.value,
            password: this.password.value,
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            email: this.email.value,
            balance: this.balance.value,
            roleId: 1
        }

        this.userService.saveUser(user).subscribe((data: any) => {
            console.log(data)
            this.redirectToLoginPage()
        })
    }

    redirectToLoginPage() {
        this.router.navigate(['/login'])
    }

    get id() {
        return this.userForm.get('id')
    }

    get username() {
        return this.userForm.get('username')
    }

    get password() {
        return this.userForm.get('password')
    }

    get firstName() {
        return this.userForm.get('firstName')
    }

    get lastName() {
        return this.userForm.get('lastName')
    }

    get email() {
        return this.userForm.get('email')
    }

    get balance() {
        return this.userForm.get('balance')
    }

}
