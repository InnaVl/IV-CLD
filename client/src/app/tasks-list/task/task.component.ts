import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ModalService} from "../../services/modal.service";
@Component({
    selector: 'tasks',
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.scss']
})

export class TaskComponent implements OnInit, OnDestroy {
    private isAllChangesSaved = false;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private modalService: ModalService) {
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
