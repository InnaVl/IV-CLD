import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CalendarComponent} from "./calendar.component";
import {CalendarTODOComponent} from "./calendar-todo/calendar-todo.component";
describe('Calendar', () => {
    let calendarComponent:    CalendarComponent;
    let fixture: ComponentFixture<CalendarComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ CalendarComponent, CalendarTODOComponent ],
        });
        fixture = TestBed.createComponent(CalendarComponent);
        calendarComponent = fixture.componentInstance;
    });

    it('should create array of days', ()=>{
         //   expect(calendarComponent.createArrayOfDays()).toEqual([]);
    });
});