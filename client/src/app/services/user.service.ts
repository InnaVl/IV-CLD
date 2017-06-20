import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import apiUrl from '../baseUrl';
import { User } from '../models/user.model';
@Injectable()
export class UserService {
    constructor(private http: Http) { }
    getById(_id: string) {
        return this.http.get(apiUrl + '/users/' + _id, this.jwt()).map((response: Response) => response.json());
    }
    create(user: User) {
        return this.http.post(apiUrl + '/users/register', user, this.jwt());
    }

    delete(_id: string) {
        return this.http.delete(apiUrl + '/users/' + _id, this.jwt());
    }


    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}