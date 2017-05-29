import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {NotfoundComponent} from "./notFound/notfound.component";
import {AuthGuard} from "./guards/guards";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {CalendarComponent} from "./calendar/calendar.component";

const appRoutes: Routes = <Routes>[
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
    {path: '**', component: NotfoundComponent  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
