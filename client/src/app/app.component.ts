import {Component, Output, EventEmitter} from '@angular/core';

import {AuthenticationService} from "./services/authentication.service";
import {User} from "../models/userModel";
import '../assets/styles/styles.scss'
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public user: string = '';


    constructor(private authenticationService: AuthenticationService) {
        this.user = this.getCurrentUserFullName();
    }

    onLogout() {
        this.authenticationService.logout();
    }

    getCurrentUserFullName(): string {
        let currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            let parse = JSON.parse(currentUser);
            return `${parse.firstName} ${parse.lastName}`;
        }
        return '';

    }
}
