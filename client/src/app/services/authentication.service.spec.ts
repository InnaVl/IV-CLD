import {AuthenticationService} from "./authentication.service";
import {Http} from "@angular/http";
import {AppConfig} from "../app.config";
describe('authentication',()=>{
    let authentication:AuthenticationService;
    beforeEach(()=>{
        authentication =  new AuthenticationService(Http, AppConfig);
    });
    it('should login',()=>{
        expect(authentication.login('user', 'password')).toBe('');
    });
    it('should logout',()=>{
        spyOn(localStorage, 'removeItem');
        authentication.logout();
        expect(localStorage.removeItem).toHaveBeenCalledWith('currentUser');
    });
});