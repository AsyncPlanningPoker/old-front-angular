import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private readonly notifier!: NotifierService;

  constructor(private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe( catchError( (error: HttpErrorResponse) => {
      const errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
      console.log(error);
      this.notifier.notify('error', error.error.message);
      return throwError(errorMsg);
    }));
  }
}
