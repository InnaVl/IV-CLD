import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {RegistrationComponent} from "./registration/registration.component";
import {RouterModule, Routes} from '@angular/router';
import {NotificationComponent} from "./notification/notification.component";
import {AuthGuard} from './guards/guards';
import {UserService} from "./services/user.service";
import {AppConfig} from "./app.config";
import {FormsModule}   from '@angular/forms';
import {NotificationService} from "./services/notification.service";
import {AuthenticationService} from "./services/authentication.service";
import {CalendarComponent} from "./calendar/calendar.component";
import {NotfoundComponent} from "./notFound/notfound.component";
import {AppRoutingModule} from "./routing.module";
import {ValidationService} from "./services/validation.service";
import {UserDispatch} from "./dispatchers/user.dispatch";
import {CalendarTODOComponent} from "./calendar/calendar-todo/calendar-todo.component";


@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule, HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        RegistrationComponent,
        HomeComponent,
        LoginComponent,
        NotificationComponent,
        CalendarComponent,
        NotfoundComponent,
        CalendarTODOComponent

    ],
    providers: [
        UserService,
        AppConfig,
        NotificationService,
        AuthenticationService,
        AuthGuard,
        ValidationService,
        UserDispatch
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
