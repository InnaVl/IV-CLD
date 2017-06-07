import {UserService} from "./user.service";
import { TestBed } from '@angular/core/testing';
import {Http} from "@angular/http";
import {MockHttp} from "./mockHttp";
import {AppConfig} from "../app.config";

describe('user servise', ()=>{
    let userServise:UserService;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers: [
                { provide: Http, useClass: MockHttp }
            ]
        });
        userServise = new UserService(Http, AppConfig);
        spyOn(Http,'get');
    });
    it('should send request to get user by id', ()=>{
       // expect(userServise.getById('1')).toBe(3);
    });
    it('should send request to create user', ()=>{
      //  expect(userServise.getById('1')).toBe(3);
    });
    it('should send request to delete user by id', ()=>{
       // expect(userServise.getById('1')).toBe(3);
    });
});