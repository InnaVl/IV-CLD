
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CalendarComponent} from "./calendar.component";
// import {NotificationComponent} from "../notification/notification.component";
// import {UserService} from "../services/user.service";
// import {FormsModule} from "@angular/forms";
// import {HttpModule} from "@angular/http";
// import {AppConfig} from "../app.config";
// import {NotificationService} from "../services/notification.service";
// import {RouterModule} from "@angular/router";

describe('BannerComponent (inline template)', () => {

    let comp:    CalendarComponent;
    let fixture: ComponentFixture<CalendarComponent>;
    let el:      HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ CalendarComponent ], // declare the test component
        });

        fixture = TestBed.createComponent(CalendarComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector

    });
    describe('', ()=>{
        it('', ()=>{
            expect(comp.matchPass()).toBe(4);
        });
    });
});