
import {TasksRoutingModule} from "../routes/tasks.routing.module";
import {NgModule} from "@angular/core";
import {TasksListComponent} from "./tasks-list.component";
import {TaskComponent} from "./task/task.component";

@NgModule({
    declarations:[
        TasksListComponent,
        TaskComponent
    ],
    imports: [
        TasksRoutingModule
    ],
    providers:[]
})
export class TasksModule {}
