import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RegistrationComponent} from "./registration.component";
import {FormsModule} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {NotificationService} from "../../services/notification.service";
import {ValidationService} from "../../services/validation.service";
import {Observable} from "rxjs";
import {error} from "shelljs";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

describe('Registration', () => {

    let registration: RegistrationComponent;
    let fixture: ComponentFixture<RegistrationComponent>;
    let mockUserService: UserService;
    let mockNotification: NotificationService;
    let mockAuthenticationService: AuthenticationService;
    let mockRouter: Router;
    let mockRes;

    beforeEach(() => {
        mockRouter = {
            navigate: null
        }as Router;
        spyOn(mockRouter, 'navigate');
        mockAuthenticationService = {
            login: null,
            logout: null
        } as AuthenticationService;
        spyOn(mockAuthenticationService, 'login').and.returnValue(Observable.of({}));
        spyOn(mockAuthenticationService, 'logout');

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
                {
                    provide: AuthenticationService,
                    useValue: mockAuthenticationService
                },
                ValidationService,
                {
                    provide: Router,
                    useValue: mockRouter
                }
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
        expect(mockAuthenticationService.login).toHaveBeenCalled();
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
    });
});