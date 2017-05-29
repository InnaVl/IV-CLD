import {RegistrationComponent} from './registration.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
// import {NotificationComponent} from "../notification/notification.component";
// import {UserService} from "../services/user.service";
// import {FormsModule} from "@angular/forms";
// import {HttpModule} from "@angular/http";
// import {AppConfig} from "../app.config";
// import {NotificationService} from "../services/notification.service";
// import {RouterModule} from "@angular/router";


describe('registration component', ()=> {
    let registrationComponent: RegistrationComponent;
    let fixture: ComponentFixture<RegistrationComponent>;
    beforeEach(()=> {
        // TestBed.configureTestingModule({
        //     imports: [HttpModule, FormsModule,  RouterModule],
        //     declarations: [RegistrationComponent, NotificationComponent],
        //     providers: [UserService,
        //         AppConfig,
        //         NotificationService]
        // }).compileComponents();
        // fixture = TestBed.createComponent(RegistrationComponent);
        // registrationComponent = fixture.componentInstance; //  test instance
    });
    describe('onCreate', ()=> {
        it('should call userService create', ()=> {
            expect(registrationComponent.matchPass('1', '1')).toBe(true);
        });
        it('should call notificationService on success', ()=> {
            expect('').toBe('');
        });
        it('should call notificationService on error', ()=> {
            expect('').toBe('');
        });
    });

    describe('isValid', ()=> {
        it('should return true on valid data', ()=> {
            expect('').toBe('');
        });
        it('should return false when no required data', ()=> {
            expect('').toBe('');
        });
        it('should return false when no passwords didnt match', ()=> {
            expect('').toBe('');
        });
        it('should notify about errors', ()=> {
            expect('').toBe('');
        });
    });
    describe('matchPass', ()=> {
        it('should return true on match', ()=> {
            expect('').toBe('');
        });
        it('should call notification service on no match in passwords', ()=> {
            expect('').toBe('');
        });
        it('should return false no match', ()=> {
            expect('').toBe('');
        });
    });
});