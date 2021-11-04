import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  protected baseUrl: string = ""
  protected httpOptions = {

  }

  constructor(
    @Inject(String) endPoint: string,
    protected httpClient: HttpClient
  ) {
    this.baseUrl = environment.baseUrl + endPoint
  }

  get(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl, this.httpOptions)
  }

  post(element: T): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, element, this.httpOptions)
  }
}
