import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    this.baseUrl = "google.com" + endPoint
  }

  post(element: T): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, element, this.httpOptions)
  }
}
