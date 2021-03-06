import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import apiUrl from '../baseUrl';
import {updateUserSub} from "../dispatchers/subs";


@Injectable()
export class AuthenticationService {
    constructor(private http: Http) {
    }

    login(username: string, password: string) {
        return this.http.post(apiUrl + '/users/authenticate', {username: username, password: password})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    updateUserSub.next();
                }
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
        updateUserSub.next();
    }
}