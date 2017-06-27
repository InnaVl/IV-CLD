import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TaskComponent} from "./task/task.component";
import {AuthGuard} from "../../guards/guards";
import {CanDeactivateGuard} from "../../guards/deactivate-guard";
import {TasksListComponent} from "./tasks-list.component";
import {TasksResolve} from "../../resolvers/tasks.resolve";

// Implement Feature Area with its own routing, implement access to router parameters.
const routes: Routes = [
    {
        path: '',
        component: TasksListComponent,
        children: [
// Implement child routes with the following guards: canActivate, resolve.
            {
                path: ':taskId',
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