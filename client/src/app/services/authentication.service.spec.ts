import {AuthenticationService} from "./authentication.service";
import apiUrl from '../baseUrl';
import {Http, HttpModule} from "@angular/http";
import {Observable} from "rxjs";
import {TestBed, inject, fakeAsync} from "@angular/core/testing";
import {UserDispatch} from "../dispatchers/user.dispatch";
describe('authentication', ()=> {
    let authentication: AuthenticationService;
    let mockHttp: Http;
    let mockDispatch: UserDispatch;
    const mockResponse = {
        "token": "token"
    };
    beforeEach(()=> {
        mockDispatch = {
            updateUserSub: null
        }as UserDispatch;
        mockHttp = {
            post: null
        } as Http;

        spyOn(mockHttp, 'post').and.returnValue(Observable.of({
            json: () => mockResponse
        }));

        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                {
                    provide: Http,
                    useValue: mockHttp
                },
                AuthenticationService
            ]
        });
    });

    it('should login', fakeAsync(
        inject([AuthenticationService], authenticationService => {
            authenticationService.login('username', 'password')
                .subscribe(() => {
                    expect(mockHttp.post).toHaveBeenCalledWith(apiUrl + '/users/authenticate',
                        {username: 'username', password: 'password'});
                });
        })
    ));

    it('should logout', ()=> {
        authentication = new AuthenticationService(mockHttp, mockDispatch);
        spyOn(localStorage, 'removeItem');
        authentication.logout();
        expect(localStorage.removeItem).toHaveBeenCalledWith('currentUser');
    });
});