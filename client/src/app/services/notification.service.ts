import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationService {
    public subject = new Subject<any>();


     success(message: string) {
        this.subject.next({ type: 'success', text: message });
    }

    error(message: string) {
        this.subject.next({ type: 'error', text: message });
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}