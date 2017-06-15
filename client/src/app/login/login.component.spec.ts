import {NotificationService} from "../services/notification.service";
import {TestBed, ComponentFixture} from "@angular/core/testing";
import {Observable} from "rxjs";
import {LoginComponent} from "./login.component";
import {AuthenticationService} from "../services/authentication.service";
import {Router, ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {FormsModule} from "@angular/forms";

describe('login component', ()=> {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let mockNotification: NotificationService;
    let mockAuthenticationService: AuthenticationService;
    let mockRouter: Router;
    let mockRoute;
    let mockRes;

    beforeEach(()=> {
        mockRes = {
            res: 'done'
        };

        mockNotification = {}as NotificationService;

        mockRouter = {
            navigate: null
        }as Router;
        spyOn(mockRouter, 'navigate');

        mockAuthenticationService = {
            logout: null,
            login: null
        }as AuthenticationService;

        spyOn(mockAuthenticationService, 'logout');
        spyOn(mockAuthenticationService, 'login').and.returnValue(Observable.of(
            {
                json: ()=> mockRes
            }
        ));


        mockRoute = {
            snapshot: {
                queryParams: []
            }
        };


        TestBed.configureTestingModule({
            imports: [FormsModule],
            providers: [
                {
                    provide: NotificationService,
                    useValue: mockNotification
                },
                {
                    provide: AuthenticationService,
                    useValue: mockAuthenticationService
                },
                {
                    provide: ActivatedRoute,
                    useValue: <ActivatedRoute>mockRoute
                },
                {
                    provide: Router,
                    useValue: mockRouter
                }
            ],
            declarations: [LoginComponent],
        });
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
    });

    it('should reset login on init', ()=> {
        component.ngOnInit();
        expect(mockAuthenticationService.logout).toHaveBeenCalled();
    });
    it('should login', ()=> {
        component.onLogin();
        expect(mockAuthenticationService.login).toHaveBeenCalled();
        expect(mockRouter.navigate).toHaveBeenCalled();
    });
});