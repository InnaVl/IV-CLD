import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {ModalService} from "../services/modal.service";


@Component({
    selector: 'modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.scss']

})

export class ModalComponent implements OnInit, OnDestroy {
    @Input() message:string = 'Are you sure?';
    public isHide: boolean = true;

    constructor(private modalService: ModalService) {
    }

    ngOnInit() {
        this.modalService.open();
        this.modalService.getSub().subscribe(data => {
            this.isHide = data.isHide;
        });
    }
    ngOnDestroy(){
        this.modalService.destroy();
    }

    onClick(state: boolean) {
        if (state) {
            this.modalService.onSave();
        }
        else {
            this.modalService.onCancel();
        }
        this.isHide = true;
    }
    close(){
        this.modalService.close();
        this.isHide = true;
    }
}
