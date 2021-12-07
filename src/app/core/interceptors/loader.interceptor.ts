import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptorStatus {
  private isRequestInFlight$: BehaviorSubject<boolean>

  constructor() {
    this.isRequestInFlight$ = new BehaviorSubject(Boolean<false>())
  }

  setStatus(isInFlight: boolean) {
    this.isRequestInFlight$.next(isInFlight)
  }

  getStatus(): Observable<boolean> {
    return this.isRequestInFlight$.asObservable()
  }
}

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private requestCounter = 0

  constructor(
    private loaderInterceptorStatus: LoaderInterceptorStatus
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requestCounter++
    this.loaderInterceptorStatus.setStatus(true)
    return next.handle(request).pipe(
      map(event => {
        return event
      }),
      finalize(() => {
        this.requestCounter--
        this.loaderInterceptorStatus.setStatus(this.requestCounter > 0)
      })
    )
  }
}
