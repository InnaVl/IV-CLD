import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {RegistrationComponent} from "./registration/registration.component";
import {NotificationComponent} from "./notification/notification.component";
import {AuthGuard} from './guards/guards';
import {UserService} from "./services/user.service";
import {AppConfig} from "./app.config";
import {FormsModule}   from '@angular/forms';
import {NotificationService} from "./services/notification.service";
import {AuthenticationService} from "./services/authentication.service";
import {CalendarComponent} from "./calendar/calendar.component";
import {NotfoundComponent} from "./notFound/notfound.component";
import {AppRoutingModule} from "./app.routing.module";
import {ValidationService} from "./services/validation.service";
import {CalendarTODOComponent} from "./calendar/calendar-todo/calendar-todo.component";
import {TasksModule} from "./tasks-list/tasks-list.module";
import {ModalComponent} from "./modal/modal.component";
import {ModalService} from "./services/modal.service";


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
      //  ModalService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
