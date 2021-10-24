import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe(LoginService.name, () => {
  let service: LoginService;
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new LoginService(httpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  // it(`#${LoginService.prototype.login} should throw when called with not Login Interface`, () => {
  //   expect(service.login({email: "", password: ""})).toThrowError();
  // });
  
  // it(`#${LoginService.prototype.login} should return when called`, () => {
  //   expect(service).toBeTruthy();
  // });
});
