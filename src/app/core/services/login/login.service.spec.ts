import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core.module';

import { LoginService } from './login.service';

describe(LoginService.name, () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ CoreModule ],
      providers: [ HttpClient, HttpHandler ]
    });
    
    service = TestBed.inject(LoginService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it(`#${LoginService.prototype.login.name} should throw when called with error data`, () => {
    expect(() => service.login({email: "", password: ""})).toThrowError()
    expect(() => service.login({email: "", password: "test"})).toThrowError()
    expect(() => service.login({email: "test", password: ""})).toThrowError()
    expect(() => service.login({email: "test", password: "test"})).toThrowError()
    expect(() => service.login({email: "test@test.tes", password: "test"})).not.toThrowError()
  });
  
  // it(`#${LoginService.prototype.login} should return when called`, () => {
  //   expect(service.login({email: "", password: ""})).toThrowError();
  // });
});
