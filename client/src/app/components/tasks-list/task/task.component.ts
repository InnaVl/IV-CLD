import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ModalService} from "../../../services/modal.service";
import {TasksService} from "../../../services/tasks.service";
@Component({
    selector: 'tasks',
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.scss']
})

export class TaskComponent implements OnInit, OnDestroy {
    private isAllChangesSaved = false;
    private task;
    id: number;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private modalService: ModalService,
                private tasksService: TasksService) {
    }

    ngOnInit() {
        console.log(this.route);
        this.task = JSON.parse(this.route.snapshot.data['tasks-list']['_body']);
        console.log(this.task)
    }

    ngOnDestroy() {
        this.modalService.destroy();
    }

    openModal() {
        this.modalService.open();
        this.modalService.getSub()
            .subscribe(
                data=> {
                    if (data.isSaved) {
                        this.save();
                        this.gotoTasks();
                    }
                    else if (data.isCanceled) {
                        this.isAllChangesSaved = true;
                        this.gotoTasks()
                    }
                }
            );
    }

    cancel() {
        this.openModal();
    }

    save() {
        this.updateTask();
        this.isAllChangesSaved = true;
        console.log(this.task);
        this.tasksService.editTask(this.task)
            .subscribe(
                ()=> {
                },
                err=> {
                    console.log(err);
                }
            );
        //  this.gotoTasks();

    }

    updateTask() {

    }

    gotoTasks() {
        this.router.navigate(['tasks-list'])
    }

    canDeactivate(): boolean {
        if (this.isAllChangesSaved) {
            return true;
        }
        else {
            this.openModal();
        }
        return false;
    }


}
