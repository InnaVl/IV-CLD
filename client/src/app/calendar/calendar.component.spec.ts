import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CalendarComponent} from "./calendar.component";
describe('Calendar', () => {
    let calendarComponent:    CalendarComponent;
    let fixture: ComponentFixture<CalendarComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ CalendarComponent ],
        });
        fixture = TestBed.createComponent(CalendarComponent);
        calendarComponent = fixture.componentInstance;
    });

    it('should create array of days', ()=>{
            expect(calendarComponent.createArrayOfDays()).toEqual([]);
    });
    it('should return current date', ()=>{
        expect(calendarComponent.getCurrentDate()).toBe(new Date());
    });
});