import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import apiUrl from '../baseUrl';
import {ITask} from "../models/task.model";
@Injectable()
export class TasksService {
    constructor(private http: Http) {
    }

    addTask(task: ITask) {
        return this.http.post(apiUrl + '/tasks/add', task);
    }

    editTask(task: ITask) {
        return this.http.post(apiUrl + '/tasks/edit', task);
    }


    getTaskById(taskId: number|string) {
        return this.http.get(apiUrl + '/tasks/current', {params: {taskId}});
    }

    getAllTask(username: number|string) {
        return this.http.get(apiUrl + '/tasks/all', {params: {username}});
    }

    getAllTaskForMonth(username: number|string, month: string|number, year: number) {
        return this.http.get(apiUrl + '/tasks/month', {params: {username, month, year}});
    }
    getTaskForDay(username: number|string, date:string){
        return this.http.get(apiUrl + '/tasks/day', {params: {username, date}});
    }

    removeTask(taskId: number|string, username: string|number) {
        return this.http.delete(apiUrl + '/tasks/delete', {params: {taskId, username}});

    }
}