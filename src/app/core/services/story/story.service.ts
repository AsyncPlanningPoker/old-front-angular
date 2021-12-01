import { HttpClient } from "@angular/common/http"
import { EventEmitter, Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { IRounds, IStory } from "../../interfaces/story/story"
import { BaseService } from "../base.service"

interface IResponseGetStoryById {
	data: IStory
}

@Injectable({
	providedIn: "root"
})
export class StoryService extends BaseService<any> {
	emitNewStory = new EventEmitter()

	constructor(protected httpClient: HttpClient) {
		super("/api/story", httpClient)
	}

	getStoryById(id: string): Observable<IResponseGetStoryById> {
		return this.httpClient.get<any>(`${this.baseUrl}/${id}`, this.httpOptions)
	}

	findAllRounds(id: string): Observable<IRounds[]> {
		return this.httpClient.get<any>(
			`${this.baseUrl}/${id}/rounds`,
			this.httpOptions
		)
	}
}
