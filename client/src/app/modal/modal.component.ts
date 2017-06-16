import {Component, Input} from "@angular/core";
import {modalSub} from '../dispatchers/user.dispatch'
@Component({
    selector:'modal-window',
    templateUrl:'./modal.component.html',
    styleUrls:['./modal.component.scss']
})
export class ModalComponent{
    @Input() modalText:string;
    @Input() hide:boolean;

    onClick(value){
        modalSub.next(value);
    }

}