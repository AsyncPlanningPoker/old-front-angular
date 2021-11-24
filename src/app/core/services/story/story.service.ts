import { HttpClient } from "@angular/common/http"
import { EventEmitter, Injectable } from "@angular/core"
import { BaseService } from "../base.service"

@Injectable({
	providedIn: "root"
})
export class StoryService extends BaseService<any> {
	emitNewStory = new EventEmitter()

	constructor(protected httpClient: HttpClient) {
		super("/api/story", httpClient)
	}
}
