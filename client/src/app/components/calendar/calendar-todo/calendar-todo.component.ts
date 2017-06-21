import {Component} from '@angular/core';
import {TasksService} from "../../../services/tasks.service";

@Component({
    selector: 'calendar-todo',
    templateUrl: 'calendar-todo.component.html',
    styleUrls: ['calendar-todo.component.scss']

})

export class CalendarTODOComponent {
    constructor(private taskService: TasksService) {
    };

    // addTask() {
    //     console.log(localStorage.getItem('currentUser'));
    //     this.taskService.addTask({
    //         id: Number(new Date()),
    //         task:{
    //             name:'name'
    //         }
    //     }).subscribe(
    //         ()=> {
    //             console.log('add')
    //         },
    //         err=> console.error(err)
    //     );
    // }
    editTask() {
        console.log(localStorage.getItem('currentUser'));
        this.taskService.editTask({
            id: 1498049801330,
            task:{
                name:'newname'
            }
        }).subscribe(
            ()=> {
                console.log('edit')
            },
            err=> console.error(err)
        );
    }
    addTask() {
        this.taskService.getById(1498049802392).subscribe(
            (d)=> {
                console.log(`${d} sdsd`)
            },
            err=> console.error(err)
        );
    }
}
