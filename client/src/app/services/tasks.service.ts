import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import apiUrl from '../baseUrl';
import {Observable} from "rxjs";
@Injectable()
export class TasksService {
    constructor(private http: Http) {
    }

    getTaskById(id: number|string) {
        return Observable.of({taskName: 'Do nothing'});
    }

    //TODO create interface for task
    addTask(task: Object) {
        return this.http.post(apiUrl + '/tasks/add', task);
    }

    editTask(task: Object) {
        return this.http.post(apiUrl + '/tasks/edit', task);
    }


    getById(id: number|string) {
        return this.http.get(apiUrl + '/tasks/current', {params: {id}});
    }
}