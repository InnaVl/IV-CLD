import {PreloadingStrategy, Route} from "@angular/router";
import {Observable} from "rxjs";
import {of} from "rxjs/observable/of";
import {Injectable} from "@angular/core";
@Injectable()
export class PreloadSelectedModulesList implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        return route.data && route.data.preload ? load() : of(null);
    }
}