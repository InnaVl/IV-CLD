import {AuthGuard} from "./guards";
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
describe('guard', ()=> {
    let mockRouter: Router;
    let mockActivatedRouter: ActivatedRouteSnapshot;
    let mockRouterState: RouterStateSnapshot;
    let guard;
    beforeEach(()=> {
        mockRouterState = {
            url: '/'
        } as RouterStateSnapshot;
        mockRouter = {
            navigate: null
        }as Router;
        spyOn(mockRouter, 'navigate');

        guard = new AuthGuard(mockRouter);
    });
    it('should be activated', ()=> {
        spyOn(localStorage, 'getItem').and.returnValue(true);
        expect(guard.canActivate()).toBe(true);
    });
    it('should not to be activated', ()=> {
        spyOn(localStorage, 'getItem').and.returnValue(false);
        expect(guard.canActivate(mockActivatedRouter, mockRouterState)).toBe(false);
        expect(mockRouter.navigate).toHaveBeenCalled();
    });
});