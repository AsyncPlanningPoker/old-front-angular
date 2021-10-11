import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    return this.verifyAuth(route.routeConfig?.path);
  }

  private verifyAuth(path: string | undefined){
    if(this.authService.auth()){
      if(this.isLogin(path)){
        console.log(this.authService.decoderToken());
        this.router.navigate(['home']);
        return false;
      }
      return true
    }

    if(this.isLogin(path)){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  private isLogin(path: string | undefined){
    if(path == "login"){
      return true;
    }
    return false;
  }


}
