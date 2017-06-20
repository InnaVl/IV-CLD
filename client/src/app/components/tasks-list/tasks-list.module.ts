import {TasksRoutingModule} from "./tasks.routing.module";
import {NgModule} from "@angular/core";
import {TasksListComponent} from "./tasks-list.component";
import {TaskComponent} from "./task/task.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {CommonModule} from '@angular/common';
import {ModalService} from "../../services/modal.service";
import {CanDeactivateGuard} from "../../guards/deactivate-guard";

@NgModule({
    declarations: [
        TasksListComponent,
        TaskComponent,
        ModalComponent
    ],
    imports: [
        TasksRoutingModule,
        CommonModule
    ],
    providers: [
        CanDeactivateGuard,
        ModalService
    ]
})
export class TasksModule {
}
