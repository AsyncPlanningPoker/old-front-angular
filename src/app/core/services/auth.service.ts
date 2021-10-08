import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from '../../../environments/environment';

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

    // const decodedToken = this.jwtHelper.decodeToken(token || "");
    const isExpired = this.jwtHelper.isTokenExpired(token || "");

    if(isExpired) return false;

    return true;
  }
}
