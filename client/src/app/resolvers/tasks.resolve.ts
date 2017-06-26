import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {TasksService} from "../services/tasks.service";

export interface ITasks {

}
@Injectable()
export class TasksResolve implements Resolve<ITasks> {

    constructor(private taskService: TasksService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.taskService.getTaskById(route.paramMap.get('taskId'));
    }
}