import { Component, Input, OnInit } from "@angular/core"
import { FormBuilder, Validators } from "@angular/forms"
import { ActivatedRoute } from "@angular/router"
import { NotifierService } from "angular-notifier"
import { finalize, map } from "rxjs/operators"
import { IRounds, IStory } from "src/app/core/interfaces/story/story"
import { AuthService } from "src/app/core/services/auth/auth.service"
import { PokerService } from "src/app/core/services/poker/poker.service"
import { StoryService } from "src/app/core/services/story/story.service"
import { VoteService } from "src/app/core/services/vote/vote.service"
import { FormComponent } from "src/app/shared/components/form/form.component"

interface IPayloadVote {
	vote: string
	idUser: string
	idRound: string
}

@Component({
	selector: "app-story-vote",
	templateUrl: "./story-area.component.html",
	styleUrls: ["./story-area.component.css"]
})
export class StoryAreaComponent implements OnInit {
	story!: IStory
	allRounds!: IRounds[]

	constructor(
		private activatedRoute: ActivatedRoute,
		private storyService: StoryService,
	) {
		
	}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((resolversData) => {
			this.story = resolversData.story
			this.storyService.findAllRounds(this.story.id).subscribe((resp) => {
				this.allRounds = resp
			})			
		})
	}

	updateAllRounds(){
		this.storyService.findAllRounds(this.story.id).subscribe((resp) => {
			this.allRounds = resp
		})
	}
}
