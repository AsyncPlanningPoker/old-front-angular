import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, EmailValidator, Validators } from '@angular/forms';
import { Login } from '../../interfaces/login/login';
import { BaseService } from '../base.service';

interface ILogin {
  email: string;
  password: string;
}

interface IUser extends ILogin {
  name: string;
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
    )
  }

  login(payload: ILogin){
    if(!payload.email)
      throw new Error("Email não pode ser vazio")
    if(!payload.password)
      throw new Error("Senha não pode ser vazio")
    if(!payload.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})*(\.\w{2,3})+$/))
      throw new Error("Email deve ser do tipo email@email.ema.em")
    
    return this.httpClient.post<any>(`${this.baseUrl}/auth`, payload, this.httpOptions)
  }

}
