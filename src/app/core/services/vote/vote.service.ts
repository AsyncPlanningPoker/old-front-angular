import { HttpClient } from "@angular/common/http"
import { EventEmitter, Injectable } from "@angular/core"
import { BaseService } from "../base.service"

@Injectable({
	providedIn: "root"
})
export class VoteService extends BaseService<any> {
	emitNewStory = new EventEmitter()

	constructor(protected httpClient: HttpClient) {
		super("/api/vote", httpClient)
	}
}
