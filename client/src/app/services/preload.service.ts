import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
//import './rxjs-extensions';


 // Implement custom preloading strategy.
@Injectable()
export class PreloadModule implements PreloadingStrategy {
    private preloadedModules: string[] = [];

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);
            return load();
        } else {
            return Observable.of(null);
        }
    }
}
