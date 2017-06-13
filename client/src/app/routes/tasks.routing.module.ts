import { Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TaskComponent} from "../tasks-list/task/task.component";


const routes:Routes = [
    {
    path:'tasks/quest',
    component: TaskComponent
}
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class TasksRoutingModule{}