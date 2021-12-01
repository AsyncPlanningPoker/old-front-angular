import { Component, OnInit } from "@angular/core"
import { FormBuilder, Validators } from "@angular/forms"
import { ActivatedRoute } from "@angular/router"
import { NotifierService } from "angular-notifier"
import { finalize } from "rxjs/operators"
import { IRounds, IStory } from "src/app/core/interfaces/story/story"
import { AuthService } from "src/app/core/services/auth/auth.service"
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
export class StoryAreaComponent extends FormComponent implements OnInit {
	story!: IStory
	allRounds!: IRounds[]
	cards = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
	isLoading: boolean = false

	constructor(
		protected authService: AuthService,
		protected formBuilder: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private storyService: StoryService,
		private voteService: VoteService,
		private readonly notifierService: NotifierService
	) {
		super(authService, formBuilder, {
			vote: [, Validators.required]
		})
	}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((resolversData) => {
			this.story = resolversData.story
			this.storyService.findAllRounds(this.story.id).subscribe((resp) => {
				this.allRounds = resp
			})
		})
	}

	createVote(payload: IPayloadVote) {
		const voteData = {
			...payload,
			idStory: this.story.id,
			idPoker: this.story.idPoker
		}
		this.isLoading = true
		this.voteService
			.post(voteData)
			.pipe(
				finalize(() => {
					this.isLoading = false
				})
			)
			.subscribe((next) => {
				this.notifierService.notify("success", "Votação feita com sucesso")
			})
	}
}
