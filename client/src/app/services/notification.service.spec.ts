import {NotificationService} from "./notification.service";
import {Subject} from "rxjs";
describe('notification service', ()=> {
    let notificationService: NotificationService;
    let subject: Subject;
    beforeEach(()=> {
        notificationService = new NotificationService();
        subject = new Subject();
    });
    it('should', ()=> {
        spyOn(subject, 'next');
        notificationService.success('qw');
        expect(subject.next()).toHaveBeenCalledWith({type: 'success', text: 'qw'});
    });
    it('should', ()=> {
        spyOn(subject, 'next');
        notificationService.error('qw');
        expect(subject.next()).toHaveBeenCalledWith({type: 'error', text: 'qw'});
    });
    it('should', ()=> {
        expect(notificationService.getMessage()).toBe('')

    });
});