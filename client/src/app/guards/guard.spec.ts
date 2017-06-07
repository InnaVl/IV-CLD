import {AuthGuard} from "./guards";
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
describe('guard', ()=>{
    let guard:AuthGuard;
    beforeEach(()=>{
        guard = new AuthGuard(Router);
    });
    it('should', ()=>{
        expect(guard.canActivate({url:['/']} as ActivatedRouteSnapshot, {url:'/'} as RouterStateSnapshot)).toBeFalsy();
    });
});