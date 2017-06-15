import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
    selector: 'tasks',
    templateUrl: 'tasks-list.component.html',
    styleUrls: ['tasks-list.component.scss']
})

export class TasksListComponent {
    constructor(private router:Router){}
    openTask() {
        const link = ['task', 1];
        this.router.navigate(link);
    }
}
