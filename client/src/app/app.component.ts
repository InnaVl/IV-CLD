import {Component, ViewEncapsulation, OnInit} from '@angular/core';

import {AuthenticationService} from "./services/authentication.service";
import {UserDispatch} from "./dispatchers/user.dispatch";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.scss', './assets/styles/global.scss']
})
export class AppComponent implements OnInit {
    public user: string = '';

    ngOnInit() {
        this.updateUser.updateUserSub.subscribe(
            ()=>{this.user = this.getCurrentUserFullName()}
        )
    }

    constructor(private authenticationService: AuthenticationService,
                private updateUser: UserDispatch) {
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
