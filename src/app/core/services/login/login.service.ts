import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../interfaces/login/login';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<Login> {

  constructor(
    protected httpClient: HttpClient
  ) {
    super(
      "",
      httpClient
    )
  }
}
