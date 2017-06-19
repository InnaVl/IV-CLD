import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
    selector: 'tasks',
    templateUrl: 'tasks-list.component.html',
    styleUrls: ['tasks-list.component.scss']
})

export class TasksListComponent {
    constructor(private router:Router, private route:ActivatedRoute){}
    openTask() {
        const link = ['/tasks-list', '1'];
        this.router.navigate(link);
    }
}
