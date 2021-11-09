import { Injectable } from "@angular/core"
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router,
    private readonly notifierService: NotifierService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError( (error: HttpErrorResponse) => {
        /*if(error.status == HttpStatusCode.Unauthorized) {
          this.authService.removeJwtFromLocalStorage()
          this.router.navigate(['login'])
        }*/

        const errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        this.notifierService.notify('error', error.error.message);
        return throwError(errorMsg);
      })
    )
  }
}
