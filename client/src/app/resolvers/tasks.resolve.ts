import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {TasksService} from "../services/tasks.service";
import {ITask} from "../models/task.model";
import {Observable} from "rxjs";

export interface ITasks {

}
@Injectable()
export class TasksResolve implements Resolve<ITasks> {

    constructor(private taskService: TasksService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.taskService.getTaskById(route.paramMap.get('taskId'));
    }
}




