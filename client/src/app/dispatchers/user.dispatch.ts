import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
@Injectable()
export class UserDispatch {
    public updateUserSub = new Subject<any>();
}