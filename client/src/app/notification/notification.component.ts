import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../services/notification.service";


@Component({
    selector: 'notification',
    templateUrl: 'notification.component.html',
    styleUrls: ['notification.component.scss']

})

export class NotificationComponent implements OnInit {
    public message: any;

    constructor(private notificationService: NotificationService) {
    }

    ngOnInit() {
        this.notificationService.getMessage().subscribe(message => {
            this.message = message;
        });
    }

    closeNotification() {
        this.message = null;
    }
}
