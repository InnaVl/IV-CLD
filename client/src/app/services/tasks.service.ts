import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
@Injectable()
export class TasksService {
    getTaskById(id: number|string) {
        return Observable.of({taskName: 'Do nothing'});
    }
}