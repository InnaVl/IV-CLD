import {NotificationService} from "./notification.service";
import {Subject} from "rxjs";
import {TestBed} from "@angular/core/testing";
describe('notification service', ()=> {
    let notificationService: NotificationService;
    beforeEach(()=> {
        notificationService = new NotificationService();
    });

    // it('should call subject with message on success', ()=> {
    //     spyOn(notificationService, 'success');
    //     notificationService.success('qw');
    //     expect(notificationService.success).toHaveBeenCalledWith('qw');
    // });
    // it('should call subject with message on success', (done) => {
    //    // let notificationService: NotificationService = TestBed.get(NotificationService);
    //     notificationService.success('OK').subscribe((state) => {
    //         expect(state).toEqual({ type: 'success', text: 'OK' });
    //         done();
    //     });
    // });
    // it('should call subject with message on error', ()=> {
    //     spyOn(subject, 'next');
    //     notificationService.error('qw');
    //     expect(subject.next()).toHaveBeenCalledWith({type: 'error', text: 'qw'});
    // });
    // it('should get msg', ()=> {
    //     expect(notificationService.getMessage()).toBe('')
    //
    // });
});