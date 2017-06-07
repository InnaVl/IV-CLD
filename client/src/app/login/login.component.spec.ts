import {LoginComponent} from "./login.component";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {NotificationService} from "../services/notification.service";
describe('login', ()=>{
    let loginComponent:LoginComponent;
    beforeEach(()=>{
        loginComponent = new LoginComponent(ActivatedRoute, Router,AuthenticationService, NotificationService)
    });
    it('should', ()=>{
        expect(loginComponent.onLogin()).toBe('');
    });
});