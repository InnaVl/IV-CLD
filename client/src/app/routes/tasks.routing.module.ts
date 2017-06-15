import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TaskComponent} from "../tasks-list/task/task.component";
import {NotfoundComponent} from "../notFound/notfound.component";
import {AuthGuard} from "../guards/guards";


const routes: Routes = [
    {
        path: 'task/:id',
        component: TaskComponent,
        canActivate:[AuthGuard],
        data: {
            title: 'Task',
            meta:[{
                name:'description',
                content: 'read details of task and edit it'
            }]
        }
    },
    {
        path: '**',
        component: NotfoundComponent,
        data: {
            title: '404',
            meta:[{
                name:'description',
                content: 'this is not the page you are looking for '
            }]
        }
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