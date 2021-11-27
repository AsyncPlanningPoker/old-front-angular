import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { IAddUser, Poker } from "../../interfaces/poker/poker"

import { UserStory } from "../../interfaces/user-story/user-story"
import { BaseService } from "../base.service"

@Injectable({
	providedIn: "root"
})
export class PokerService extends BaseService<Poker> {
	constructor(protected httpClient: HttpClient) {
		super("/api/poker", httpClient)
	}

	getPokerRelatedToUser(): Observable<Poker[]> {
		return this.httpClient.get<any>(
			`${this.baseUrl}/fromUser`,
			this.httpOptions
		)
	}

	getPokerById(id: string): Observable<Poker> {
		return this.httpClient.get<any>(`${this.baseUrl}/${id}`, this.httpOptions)
	}

	getStoriesFromPoker(id: string): Observable<UserStory[]> {
		return this.httpClient.get<any>(
			`${this.baseUrl}/${id}/stories`,
			this.httpOptions
		)
	}
	addUser(payload: IAddUser) {
		return this.httpClient.post<any>(
			`${this.baseUrl}/addUser`,
			payload,
			this.httpOptions
		)
	}
}
