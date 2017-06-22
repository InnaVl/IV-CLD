import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {TasksService} from "../../services/tasks.service";
@Component({
    selector: 'tasks',
    templateUrl: 'tasks-list.component.html',
    styleUrls: ['tasks-list.component.scss']
})

export class TasksListComponent implements OnInit {
    private user;
    private tasks;


    constructor(private router: Router,
                private route: ActivatedRoute,
                private taskService: TasksService) {
    }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.fetchTasks();
    }

    fetchTasks() {
        this.taskService.getAllTask(this.user.username).subscribe(
            data=> {
                this.tasks = JSON.parse(data['_body'])
            },
            err => {
                console.log(err)
            }
        )
    }

    openTask(taskId: number|string) {
        const link = ['/tasks-list', taskId];
        this.router.navigate(link);
    }
}
