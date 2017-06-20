import {fakeAsync, inject, TestBed} from '@angular/core/testing';
import {HttpModule, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {UserService} from "./user.service";
import {User} from "../models/user.model";
import apiUrl from '../baseUrl';
describe('UserService', () => {
    let mockHttp: Http;
    let jwt;
    let fakeUser: User;
    const mockResponse = {
        "userName": "UserName"
    };
    beforeEach(() => {
        mockHttp = {
            get: null,
            post: null,
            delete: null
        } as Http;
        fakeUser = {
            username: 'username'
        } as User;

        spyOn(mockHttp, 'get').and.returnValue(Observable.of({
            json: () => mockResponse
        }));
        spyOn(mockHttp, 'post').and.returnValue(Observable.of('OK'));
        spyOn(mockHttp, 'delete').and.returnValue(Observable.of('OK'));
        spyOn(localStorage, 'getItem').and.returnValue('{"":""}');
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                {
                    provide: Http,
                    useValue: mockHttp
                },
                UserService
            ]
        });
    });

    it('should get user by id', fakeAsync(
        inject([UserService], userService => {
            userService.getById('1')
                .subscribe(res => {
                    expect(mockHttp.get).toHaveBeenCalledWith(apiUrl + '/users/1', jwt);
                    expect(res).toEqual(mockResponse);
                });
        })
    ));

    it('should create new user', fakeAsync(
        inject([UserService], userService => {
            userService.create(fakeUser)
                .subscribe(res => {
                    expect(mockHttp.post).toHaveBeenCalledWith(apiUrl + '/users/register', fakeUser, jwt);
                    expect(res).toEqual('OK');
                });
        })
    ));

    it('should delete user', fakeAsync(
        inject([UserService], userService => {
            userService.delete('1')
                .subscribe(res => {
                    expect(mockHttp.delete).toHaveBeenCalledWith(apiUrl + '/users/1', jwt);
                    expect(res).toEqual('OK');
                });
        })
    ));

});