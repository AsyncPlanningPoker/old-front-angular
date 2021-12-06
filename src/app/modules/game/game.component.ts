import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { NotifierService } from "angular-notifier"
import { Observable } from "rxjs"
import { UserStory } from "src/app/core/interfaces/user-story/user-story"
import { AuthService } from "src/app/core/services/auth/auth.service"
import { PokerService } from "src/app/core/services/poker/poker.service"
import { StoryService } from "src/app/core/services/story/story.service"

@Component({
	selector: "app-game",
	templateUrl: "./game.component.html",
	styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
	poker!: any
	storyList!: Observable<UserStory[]>
	userId: string = ""

	constructor(
		private activatedRoute: ActivatedRoute,
		private pokerService: PokerService,
		private storyService: StoryService,
		private notifierService: NotifierService,
		private authService: AuthService
	) {
		this.poker = this.activatedRoute.snapshot.data["poker"]
	}

	loadStories() {
		this.storyList = this.pokerService.getStoriesFromPoker(this.poker.id)
	}

	ngOnInit(): void {
		this.loadStories()
		this.storyService.emitNewStory.subscribe(() => this.loadStories())
		this.userId = this.authService.getTokenInfo()!.userId
	}

	closeAllRounds() {
		console.log("closeAllRounds")
		this.pokerService
			.closeAllRoundsOpenedByIdPoker(this.poker.id)
			.subscribe((next) => {
				this.notifierService.notify("success", "Rounds encerrados com sucesso")
			})
	}
}
