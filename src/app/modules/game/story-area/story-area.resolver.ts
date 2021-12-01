import { Injectable } from "@angular/core"
import {
	Router,
	Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from "@angular/router"
import { Observable, of } from "rxjs"
import { map } from "rxjs/operators"
import { IStory } from "src/app/core/interfaces/story/story"
import { StoryService } from "src/app/core/services/story/story.service"

@Injectable({
	providedIn: "root"
})
export class StoryAreaResolver implements Resolve<IStory> {
	constructor(private storyService: StoryService) {}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<IStory> {
		return this.storyService
			.getStoryById(route.params.idStory)
			.pipe(map((resp) => resp.data))
	}
}
