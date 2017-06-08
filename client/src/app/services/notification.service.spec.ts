import {NotificationService} from "./notification.service";
import {Subject} from "rxjs";
describe('notification service', ()=> {
    let notificationService: NotificationService;
    let subject: Subject<any>;
    beforeEach(()=> {
        subject = {
            next:null,
            asObservable:null
        } as Subject<any>;
        notificationService = new NotificationService();
        notificationService.subject = subject;
        spyOn(subject, 'next');
        spyOn(subject, 'asObservable').and.returnValue('subject');
    });
    it('should call subject with message on success', (done)=> {
        notificationService.success('qw');
        expect(subject.next).toHaveBeenCalledWith({ type: 'success', text: 'qw' });
        done();
    });
    it('should call subject with message on error', (done)=> {
        notificationService.error('qw');
        expect(subject.next).toHaveBeenCalledWith({ type: 'error', text: 'qw' });
        done();
    });
    it('should get msg', ()=>{
        expect(notificationService.getMessage()).toBe('subject');
        expect(subject.asObservable).toHaveBeenCalled();
    });
});