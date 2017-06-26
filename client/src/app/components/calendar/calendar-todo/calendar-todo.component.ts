import {Component, OnInit} from '@angular/core';
import {TasksService} from '../../../services/tasks.service';
import {DatePipe} from "@angular/common";


@Component({
    selector: 'calendar-todo',
    templateUrl: 'calendar-todo.component.html',
    styleUrls: ['calendar-todo.component.scss']

})

export class CalendarTODOComponent implements OnInit {
    constructor(private taskService: TasksService,
                public datepipe: DatePipe,) {
    };

    public taskAction: string;
    public tasks;
    private user;

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.tasks = this.fetchTasks();
    }

    addTask() {
        if (this.taskAction) {
            let now = new Date();
            this.taskService.addTask({
                taskId: Number(new Date()),
                username: this.user.username,
                date: this.datepipe.transform(now, 'yyyy-MM-dd'),
                action: this.taskAction,
                priority: 'normal',
                description :''

            }).subscribe(
                ()=> {
                    this.taskAction = null;
                    this.fetchTasks();
                },
                err=> console.error(err)
            );
        }
    }

    deleteTask(taskId: number|string) {
        this.taskService.removeTask(taskId, this.user.username).subscribe(
            ()=> {
                this.fetchTasks();
            },
            err => {
                console.log(err)
            }
        )
    }

    fetchTasks() {
        let now = new Date();
        this.taskService.getTaskForDay(this.user.username, this.datepipe.transform(now, 'yyyy-MM-dd')
        )
            .subscribe(
                (data)=> {
                    this.tasks = JSON.parse(data['_body']);
                }
            );
    }
}


//     editTask() {
//         console.log(localStorage.getItem('currentUser'));
//         this.taskService.editTask({
//             id: 1498049801330,
//             task: {
//                 name: 'newname'
//             }
//         } as ITask).subscribe(
//             ()=> {
//                 console.log('edit')
//             },
//             err=> console.error(err)
//         );
//     }
//
//     getTask(id: number|string) {
//         this.taskService.getTaskById(id).subscribe(
//             (data)=> {
//
//                 console.log(JSON.parse(data["_body"]))
//             },
//             err=> console.error(err)
//         );
//     }
//
//     getAllTask(id: number|string) {
//         this.taskService.getAllTask(id).subscribe(
//             (data)=> {
//
//                 console.log(JSON.parse(data["_body"]))
//             },
//             err=> console.error(err)
//         );
//     }
// }
