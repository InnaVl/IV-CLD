import {ValidationService} from "./validation.service";
describe('validation', ()=>{
    let validation:ValidationService;
    beforeEach(()=>{
        validation = new ValidationService();
    });
    it('should', ()=>{
        expect(validation.isEqualPassword('1','2')).toBeFalsy();
    });
});