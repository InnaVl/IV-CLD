import {TasksRoutingModule} from "./tasks.routing.module";
import {NgModule} from "@angular/core";
import {TasksListComponent} from "./tasks-list.component";
import {TaskComponent} from "./task/task.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {CommonModule} from '@angular/common';
import {ModalService} from "../../services/modal.service";
import {CanDeactivateGuard} from "../../guards/deactivate-guard";
import {FormsModule} from "@angular/forms";


@NgModule({
    imports: [
        TasksRoutingModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        TasksListComponent,
        TaskComponent,
        ModalComponent

    ],

    providers: [
        CanDeactivateGuard,
        ModalService
    ]
})
export class TasksModule {


}
