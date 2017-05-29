import {Component, ViewChild} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../../models/userModel';
import {NotificationService} from '../services/notification.service';

@Component({
    selector: 'registration-form',
    templateUrl: 'registration.component.html',
    styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
    @ViewChild('registrationForm') registration: any;
    private user: User = {
        username: null,
        firstName: null,
        lastName: null,
        password: null
    };
    private confirmPassword: string;

    constructor(private userService: UserService,
                private notification: NotificationService) {
    }

    onCreate() {
        console.log(this.user);
        if (this.isValid()) {
            this.userService.create(this.user).subscribe(
                res => {
                    this.notification.success(res.statusText)
                },
                err => {
                    this.notification.error(err._body);
                });
        }
    }

    isValid(): boolean {
        return this.registration.control.valid;
    }

    matchPass(firstPassword:string, secondPassword:string): boolean {
        return firstPassword === secondPassword;
    }

    passwordPattern(){

    }

}
