import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.isLogined()) {
            return true;
        }
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }

    canLoad(route: ActivatedRouteSnapshot) {
        if (this.isLogined()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    isLogined() {
        return localStorage.getItem('currentUser');
    }
}