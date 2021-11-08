import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Poker } from "../../interfaces/poker/poker"

import { BaseService } from "../base.service"

@Injectable({
	providedIn: "root"
})
export class PokerService extends BaseService<Poker> {
	constructor(protected httpClient: HttpClient) {
		super("/api/poker", httpClient)
	}

	getPokerRelatedToUser(): Observable<Poker> {
		return this.httpClient.get<any>(
			`${this.baseUrl}/fromUser`,
			this.httpOptions
		)
	}
}
