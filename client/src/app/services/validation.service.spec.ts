import {ValidationService} from "./validation.service";
describe('validation', ()=>{
    let validation:ValidationService;
    beforeEach(()=>{
        validation = new ValidationService();
    });
    it('should return false on different passwords', ()=>{
        expect(validation.isEqualPassword('1','2')).toBeFalsy();
    });
    it('should return true on equal passwords', ()=>{
        expect(validation.isEqualPassword('1','1')).toBeTruthy();
    });
});