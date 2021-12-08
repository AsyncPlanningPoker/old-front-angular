import { HttpClient } from "@angular/common/http"
import { EventEmitter, Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Vote } from "../../interfaces/round/round"
import { BaseService } from "../base.service"

@Injectable({
	providedIn: "root"
})
export class VoteService extends BaseService<any> {
	emitNewStory = new EventEmitter()

	constructor(protected httpClient: HttpClient) {
		super("/api/vote", httpClient)
	}

	voteInRound(id: string, payload: Vote): Observable<{ voteId: string }> {
		return this.httpClient.put<any>(`${this.baseUrl}/${id}`, payload, this.httpOptions)
	}
}
