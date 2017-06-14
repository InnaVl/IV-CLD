import {Injectable} from '@angular/core';

@Injectable()
export class ValidationService {

    isEqualPassword(pas1: string|number, pas2: string|number) {
        return pas1 === pas2;
    }

}