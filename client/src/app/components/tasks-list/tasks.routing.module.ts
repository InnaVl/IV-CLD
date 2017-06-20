import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TaskComponent} from "./task/task.component";
import {AuthGuard} from "../../guards/guards";
import {CanDeactivateGuard} from "../../guards/deactivate-guard";
import {TasksListComponent} from "./tasks-list.component";
import {TasksResolve} from "../../resolvers/tasks.resolve";


const routes: Routes = [
    {
        path: '',
        component: TasksListComponent,
        children: [

            {
                path: ':id',
                component: TaskComponent,
                canActivate: [AuthGuard],
                canDeactivate: [CanDeactivateGuard],
                resolve: {
                    'tasks-list': TasksResolve
                },
                data: {
                    title: 'Task',
                    meta: [{
                        name: 'description',
                        content: 'read details of task and edit it'
                    }]
                }
            }]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TasksRoutingModule {
}