import {NotificationService} from "../services/notification.service";
import {NotificationComponent} from "./notification.component";
import {TestBed, ComponentFixture} from "@angular/core/testing";
import {Observable} from "rxjs";

describe('notification component', ()=>{
    let component:NotificationComponent;
    let fixture: ComponentFixture<NotificationComponent>;
    let mockNotification: NotificationService;

    beforeEach(()=>{
        mockNotification = {
            getMessage:null
        }as NotificationService;
        spyOn(mockNotification, 'getMessage').and.returnValue(Observable.of('msg'));
        TestBed.configureTestingModule({
            providers: [
                {
                    provide:NotificationService,
                    useValue:mockNotification
                }

            ],
            declarations: [NotificationComponent],
        });
        fixture = TestBed.createComponent(NotificationComponent);
        component = fixture.componentInstance;

    });
    it('should subscribe on init and set up mesg', ()=>{
        component.ngOnInit();
        expect(component.message).toBe('msg');
    });

    it('should close notification', ()=>{
        component.closeNotification();
        expect(component.message).toEqual(null);
    });
});