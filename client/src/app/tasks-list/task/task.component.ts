import {Component, OnInit, ViewChild} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
@Component({
    selector: 'tasks',
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.scss']
})

export class TaskComponent implements OnInit {
    private isHidenModal: boolean = true;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        // this.route.params.switchMap((params:Params)=>{
        //     console.log(params['id']) //get task by service
        // })
        // .subscribe(
        //     task=> {//init task}
        //     }
        // );

    }

    cancel() {
        this.gotoTasks();
    }

    save() {
        this.isHidenModal= true;
        this.updateTask();
        this.gotoTasks();
    }

    updateTask() {

    }

    gotoTasks() {
    }


}
