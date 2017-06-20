import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {NotificationComponent} from "./components/notification/notification.component";
import {AuthGuard} from './guards/guards';
import {UserService} from "./services/user.service";
import {AppConfig} from "./app.config";
import {FormsModule}   from '@angular/forms';
import {NotificationService} from "./services/notification.service";
import {AuthenticationService} from "./services/authentication.service";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {NotfoundComponent} from "./components/notFound/notfound.component";
import {AppRoutingModule} from "./app.routing.module";
import {ValidationService} from "./services/validation.service";
import {CalendarTODOComponent} from "./components/calendar/calendar-todo/calendar-todo.component";
import {TasksModule} from "./components/tasks-list/tasks-list.module";
import {ModalComponent} from "./components/modal/modal.component";
import {ModalService} from "./services/modal.service";
import {TasksService} from "./services/tasks.service";
import {TasksResolve} from "./resolvers/tasks.resolve";


@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule, HttpModule,
        FormsModule,
     //   TasksModule
    ],
    declarations: [
        AppComponent,
        RegistrationComponent,
        HomeComponent,
        LoginComponent,
        NotificationComponent,
        CalendarComponent,
        NotfoundComponent,
        CalendarTODOComponent,
     //   ModalComponent

    ],
    providers: [
        UserService,
        AppConfig,
        NotificationService,
        AuthenticationService,
        AuthGuard,
        ValidationService,
        TasksService,
        TasksResolve
      //  ModalService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
