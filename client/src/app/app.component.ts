import {Component, ViewEncapsulation, OnInit, OnDestroy} from '@angular/core';

import {AuthenticationService} from "./services/authentication.service";
import {updateUserSub} from "./dispatchers/user.dispatch";
import {Title, Meta} from "@angular/platform-browser";
import {Subscription} from "rxjs";
import {Router, NavigationEnd} from "@angular/router";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.scss', './assets/styles/global.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public user: string = '';
    private sub: Subscription;

    constructor(private authenticationService: AuthenticationService,
                private title: Title,
                private meta: Meta,
                private router: Router) {
        this.user = this.getCurrentUserFullName();
    }

    ngOnInit() {
        updateUserSub.subscribe(
            ()=> {
                this.user = this.getCurrentUserFullName()
            }
        );
        this.setPageTitleAndMeta();

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    setPageTitleAndMeta() {
        this.sub = this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(()=> this.router.routerState.root)
            .map(route => {
                while (route.firstChild){
                    route = route.firstChild;
                }
                return route;
            })
            .filter(route => route.outlet === 'primary')
            .switchMap(route => route.data)
            .subscribe(
                data => {
                    this.title.setTitle(data['title']);
                    this.meta.addTags(data['meta']);
                }
            )
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
