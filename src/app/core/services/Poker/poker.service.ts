import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class PokerService extends BaseService<any>  {

  constructor(
    protected httpClient: HttpClient
  ) {
    super(
      "/api/poker",
      httpClient
    )
  }
}
