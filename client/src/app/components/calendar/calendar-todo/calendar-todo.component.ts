import {Component} from '@angular/core';
import {TasksService} from "../../../services/tasks.service";

@Component({
    selector: 'calendar-todo',
    templateUrl: 'calendar-todo.component.html',
    styleUrls: ['calendar-todo.component.scss']

})

export class CalendarTODOComponent {
    constructor(private taskService:TasksService){
    };
    addTask() {
        console.log('click');
    this.taskService.addTask({name:'12'}).subscribe(
        ()=>{
            console.log('add')
        },
        err=> console.error(err)
    );
    }
}
