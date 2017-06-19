import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
@Injectable()
export class ModalService {
    public subject = new Subject<any>();

    getSub() {
        return this.subject.asObservable();
    }

    onSave() {
        this.subject.next({isHiden: true, isSaved: true, isCanceled: false});
    }

    onCancel() {
        this.subject.next({isHiden: true, isSaved: false, isCanceled: true});
    }

    open() {
        this.subject.isStopped = false;
        this.subject.next({isHiden: false, isSaved: false, isCanceled: false});
    }

    close() {
        this.subject.next({isHiden: true, isSaved: false, isCanceled: false})
    }

    destroy() {
        this.subject.next({isHiden: false, isSaved: false, isCanceled: false});
        this.subject.complete();
    }

}