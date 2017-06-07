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
    private user: User = {
        username: null,
        firstName: null,
        lastName: null,
        password: null
    };
    private confirmPassword: string;

    constructor(private userService: UserService,
                private notification: NotificationService,
                private validationService: ValidationService
    ) {
    }

    onCreate() {
        console.log(this.user);
        if (this.isValid()) {
            this.userService.create(this.user).subscribe(
                () => {
                    this.notification.success('Welcome! You create an akk.')
                },
                err => {
                    this.notification.error(err._body);
                });
        }else {
            this.notification.error('Wrong confirmation password');
        }
    }

    isValid(): boolean {
        return this.validationService.isEqualPassword(this.user.password, this.confirmPassword);
    }
    a(){
        return 3;
    }
}
