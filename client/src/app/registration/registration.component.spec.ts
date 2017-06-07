import {RegistrationComponent} from "./registration.component";
import {UserService} from "../services/user.service";
import {NotificationService} from "../services/notification.service";
import {ValidationService} from "../services/validation.service";
describe('reg', ()=>{
    let component:RegistrationComponent;
    beforeEach(()=>{
        // spyOn(UserService,'user');
        // spyOn(NotificationService, 'notyf');
     component = new RegistrationComponent(UserService, NotificationService, ValidationService);
    });
    it('should', ()=>{
        expect(component.a()).toBe(3);
    });
});