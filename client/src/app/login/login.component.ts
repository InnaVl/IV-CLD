import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Credentials} from "../../models/userModel";
import {AuthenticationService} from "../services/authentication.service";
import {NotificationService} from "../services/notification.service";
import {UserDispatch} from "../dispatchers/user.dispatch";


@Component({
    selector: 'login-form',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {

    @Output() updateUser = new EventEmitter();

    private credentials: Credentials = {
        username: null,
        password: null
    };
    private loading: boolean = false;
    private returnUrl: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService,
                private notification: NotificationService) {
    }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }

    onLogin() {
        this.loading = true;
        this.authenticationService.login(this.credentials.username, this.credentials.password)
            .subscribe(
                () => {
                    this.router.navigate([this.returnUrl]);

                },
                error => {
                    this.notification.error(error._body);

                },
                ()=> {
                    this.loading = false;
                })
    }
}
