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
    it('should return true if user login', ()=>{
        spyOn(localStorage, 'getItem').and.returnValue(true);
        expect(guard.isLogined()).toBe(true);
    });
    it('should be activated', ()=> {
        spyOn(localStorage, 'getItem').and.returnValue(true);
        expect(guard.canActivate()).toBe(true);
    });
    it('should can be loaded', ()=> {
        spyOn(localStorage, 'getItem').and.returnValue(true);
        expect(guard.canLoad()).toBe(true);
    });
    it('should not to be activated', ()=> {
        spyOn(localStorage, 'getItem').and.returnValue(false);
        expect(guard.canActivate(mockActivatedRouter, mockRouterState)).toBe(false);
        expect(mockRouter.navigate).toHaveBeenCalled();
    });
    it('should cannot loaded and redirect to login page', ()=> {
        spyOn(localStorage, 'getItem').and.returnValue(false);
        expect(guard.canLoad(mockActivatedRouter)).toBe(false);
        expect(mockRouter.navigate).toHaveBeenCalled();
    });
});