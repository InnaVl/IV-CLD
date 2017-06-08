import {Component, ViewChild} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../../models/userModel';
import {NotificationService} from '../services/notification.service';
import {ValidationService} from "../services/validation.service";

@Component({
    selector: 'registration-form',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.scss']
})

export class RegistrationComponent {
    @ViewChild('registrationForm') registration: any;
    public user: User = {
        username: null,
        firstName: null,
        lastName: null,
        password: null
    };
    public confirmPassword: string;

    constructor(private userService: UserService,
                private notification: NotificationService,
                private validationService: ValidationService
    ) {
    }

    onCreate() {
        if (this.isValid(this.user.password, this.confirmPassword)) {
            this.userService.create(this.user).subscribe(
                () => {
                    this.notification.success('Welcome! You create an account.')
                },
                err => {
                    this.notification.error(err._body);
                });
        }else {
            this.notification.error('Wrong confirmation password');
        }
    }

    isValid(pas1:string|number, pas2:string|number): boolean {
        return this.validationService.isEqualPassword(pas1, pas2);
    }
}
