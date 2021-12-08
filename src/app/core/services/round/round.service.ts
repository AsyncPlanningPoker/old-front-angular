import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetRoundResult, ResponseRound } from '../../interfaces/round/round';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class RoundService extends BaseService<any>{

  constructor(protected httpClient: HttpClient) {
		super("/api/round", httpClient)
	}

  getRoundById(id: string): Observable<GetRoundResult> {
		return this.httpClient.get<any>(`${this.baseUrl}/${id}`, this.httpOptions)
	}

  createNextRound(id: string): Observable<ResponseRound> {
		return this.httpClient.post<any>(`${this.baseUrl}/${id}/next`, this.httpOptions)
	}
}
