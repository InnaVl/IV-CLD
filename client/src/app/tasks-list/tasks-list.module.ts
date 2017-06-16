
import {TasksRoutingModule} from "../routes/tasks.routing.module";
import {NgModule} from "@angular/core";
import {TasksListComponent} from "./tasks-list.component";
import {TaskComponent} from "./task/task.component";
import {ModalComponent} from "../modal/modal.component";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        TasksListComponent,
        TaskComponent,
        ModalComponent
    ],
    imports: [
        TasksRoutingModule,
        CommonModule
    ],
    providers:[]
})
export class TasksModule {}
