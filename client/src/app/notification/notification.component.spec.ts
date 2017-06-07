import {NotificationService} from "../services/notification.service";
import {NotificationComponent} from "./notification.component";
describe('notification component', ()=>{
    let component:NotificationComponent;
    let notificationService:NotificationService;
    beforeEach(()=>{
        notificationService = new NotificationService();
        component = new NotificationComponent(notificationService);
    });
    it('should subscribe on init', ()=>{
        spyOn(notificationService, 'getMessage').and.returnValue('msg');
        component.ngOnInit();
        expect(component.message).toBe('msg');
    });
});