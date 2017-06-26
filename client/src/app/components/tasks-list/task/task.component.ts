import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router, RouterStateSnapshot} from "@angular/router";
import {ModalService} from "../../../services/modal.service";
import {TasksService} from "../../../services/tasks.service";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'tasks',
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.scss']
})

export class TaskComponent implements OnInit, OnDestroy {
    private task;
    private initialTask;
    private taskDate;


    constructor(private route: ActivatedRoute,
                public datepipe: DatePipe,
                private router: Router,
                private modalService: ModalService,
                private tasksService: TasksService) {

    }

    ngOnInit() {
        this.task = JSON.parse(this.route.snapshot.data['tasks-list']['_body']);
        this.initialTask = Object.assign({}, this.task);
        this.taskDate = this.task.date;
    }

    ngOnDestroy() {
        this.modalService.destroy();
    }

    cancel() {
        this.router.navigate(['tasks-list'])
    }

    save() {
        console.log(this.task.date);
        this.task.date = this.datepipe.transform(this.taskDate, 'yyyy-MM-dd');
        console.log(this.task.date);
        this.tasksService.editTask(this.task)
            .subscribe(
                ()=> {
                    this.initialTask = Object.assign({}, this.task);
                },
                err=> {
                    console.log(err);
                }
            );
    }

    canDeactivate() {
        if (!this.isAllChangesSaved()) {
            this.modalService.open();
            return new Promise((resolve) => {
                this.modalService.getSub().subscribe(res => {
                    if (res.isSaved) {
                        this.save();
                    }
                    if (res.isSaved || res.isCanceled) {
                        resolve(true)
                    }
                    else {
                        resolve(false);
                    }

                });
            })
        }
        else {
            return true
        }
    }

    isAllChangesSaved() {
        return JSON.stringify(this.task) === JSON.stringify(this.initialTask);
    }

}
