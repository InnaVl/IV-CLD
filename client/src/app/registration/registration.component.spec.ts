import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RegistrationComponent} from "./registration.component";
import {FormsModule} from "@angular/forms";
import {UserService} from "../services/user.service";
import {NotificationService} from "../services/notification.service";
import {ValidationService} from "../services/validation.service";
import {Observable} from "rxjs";
import {error} from "shelljs";

describe('Registration', () => {

    let registration: RegistrationComponent;
    let fixture: ComponentFixture<RegistrationComponent>;
    let mockUserService: UserService;
    let mockNotification: NotificationService;
    let mockRes;

    beforeEach(() => {
        mockUserService = {
            create: null
        }as UserService;
        mockNotification = {
            error: null,
            success: null
        }as NotificationService;
        mockRes = {
            res: 'RES',
            err: {
                _body: 'err'
            }
        };

        spyOn(mockNotification, 'error');
        spyOn(mockNotification, 'success');
        spyOn(mockUserService, 'create').and.returnValue(Observable.of({
            json: () => mockRes
        }));

        TestBed.configureTestingModule({
            imports: [FormsModule],
            providers: [
                {
                    provide: UserService,
                    useValue: mockUserService
                },
                {
                    provide: NotificationService,
                    useValue: mockNotification
                },
                ValidationService
            ],
            declarations: [RegistrationComponent],
        });
        fixture = TestBed.createComponent(RegistrationComponent);
        registration = fixture.componentInstance;
        registration.user = {
            username: 'q',
            firstName: 'w',
            lastName: 'e',
            password: 'right'
        };
    });
    it('should have a defined component', () => {
        expect(registration).toBeDefined();
    });
    it('should check passwords', ()=> {
        expect(registration.isValid(2, 2)).toBeTruthy();
    });
    it('should notify about wrong confirmation', ()=> {
        registration.confirmPassword = 'wrong';
        registration.onCreate();
        expect(mockNotification.error).toHaveBeenCalledWith('Wrong confirmation password');
    });
    it('should notify about successful registration', ()=> {
        registration.confirmPassword = 'right';
        registration.onCreate();
        expect(mockNotification.success).toHaveBeenCalled();
    })


});