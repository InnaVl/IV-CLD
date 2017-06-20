import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {NotfoundComponent} from "./components/notFound/notfound.component";
import {AuthGuard} from "./guards/guards";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {TasksListComponent} from "./components/tasks-list/tasks-list.component";

const appRoutes: Routes = <Routes>[
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Home',
            meta: [{
                name: 'description',
                content: 'Home page, with settings'
            }]
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Sign in',
            meta: [{
                name: 'description',
                content: 'Login Page'
            }]
        }
    },
    {
        path: 'registration',
        component: RegistrationComponent,
        data: {
            title: 'Sign up',
            meta: [{
                name: 'description',
                content: 'registration page'
            }]
        }
    },
    {
        path: 'calendar',
        component: CalendarComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Calendar',
            meta: [{
                name: 'description',
                content: 'Calendar with todo list'
            }]
        }
    },
    { //not angular-cli way to lazy loading
        path: 'tasks-list',
        canLoad:[AuthGuard],
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./components/tasks-list/tasks-list.module.ts').TasksModule);
            })
        }),
        data: {
            title: 'Tasks',
            meta: [{
                name: 'description',
                content: 'List of all tasks'
            }]
        }
    },

    {path: '', redirectTo: '/home', canActivate: [AuthGuard], pathMatch: 'full'},
    {path: '**', component:NotfoundComponent}
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
