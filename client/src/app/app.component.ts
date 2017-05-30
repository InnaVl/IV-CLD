import {Component, Output, EventEmitter} from '@angular/core';

import {AuthenticationService} from "./services/authentication.service";
import {User} from "../models/userModel";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
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
