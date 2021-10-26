import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private storage: Storage;
  private jwtHelper;

  constructor() {
    this.storage = window.localStorage;
    this.jwtHelper = new JwtHelperService();
  }

  auth() {
    const token = this.storage.getItem('planning-poker-token');
    const isExpired = this.jwtHelper.isTokenExpired(token || "");

    if(isExpired) return false;

    return true;
  }

  decode(){
    const token = this.storage.getItem('planning-poker-token');
    const decodeToken = this.jwtHelper.decodeToken(token || "")
    return decodeToken ? decodeToken : "";
  }
}
