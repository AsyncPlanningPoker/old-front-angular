import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../interfaces/login/login';
import { BaseService } from '../base.service';

interface ILogin {
  email: string;
  password: string;
}

interface IUser extends ILogin {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<Login> {

  constructor(
    protected httpClient: HttpClient
  ) {
    super(
      "/api/users",
      httpClient
    );
  }


  login(payload: ILogin){

    console.log("Email: ", payload.email);
    console.log("password: ", payload.password);
    console.log(this);

    return this.httpClient.post<any>(`${this.baseUrl}/auth`, payload, this.httpOptions);
  }

  setHeader(token :HttpHeaders){
    super.httpOptions = {
      header: token
    }
  }

}
