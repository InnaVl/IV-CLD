import {Component} from '@angular/core';

@Component({
    selector: 'calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.scss']

})

export class CalendarComponent {
    public weekDaysNames = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    public currentMonth = 'June';
    public calendarData = [
        [
            {month: 'may', date: 29},
            {month: 'may', date: 30},
            {month: 'may', date: 31},
            {month: 'June', date: 1},
            {month: 'June', date: 2},
            {month: 'June', date: 3},
            {month: 'June', date: 4},
        ],
        [
            {month: 'June', date: 5},
            {month: 'June', date: 6},
            {month: 'June', date: 7},
            {month: 'June', date: 8},
            {month: 'June', date: 9},
            {month: 'June', date: 10},
            {month: 'June', date: 11},
        ],
        [
            {month: 'June', date: 12},
            {month: 'June', date: 13},
            {month: 'June', date: 14},
            {month: 'June', date: 15},
            {month: 'June', date: 16},
            {month: 'June', date: 17},
            {month: 'June', date: 18},
        ],
        [
            {month: 'June', date: 19},
            {month: 'June', date: 20},
            {month: 'June', date: 21},
            {month: 'June', date: 22},
            {month: 'June', date: 23},
            {month: 'June', date: 24},
            {month: 'June', date: 25},
        ],
        [
            {month: 'June', date: 26},
            {month: 'June', date: 27},
            {month: 'June', date: 28},
            {month: 'June', date: 29},
            {month: 'June', date: 30},
            {month: 'jul', date: 1},
            {month: 'jul', date: 2},
        ],
        [
            {month: 'jul', date: 3},
            {month: 'jul', date: 4},
            {month: 'jul', date: 5},
            {month: 'jul', date: 6},
            {month: 'jul', date: 7},
            {month: 'jul', date: 8},
            {month: 'jul', date: 9},
        ]
    ];

    getCurrentMonth(){}
}

