import { Component, OnInit } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { ActivatedRoute } from "@angular/router"
import { Observable } from "rxjs"
import { UserStory } from "src/app/core/interfaces/user-story/user-story"
import { PokerService } from "src/app/core/services/poker/poker.service"
import { StoryService } from "src/app/core/services/story/story.service"
import { StoryCreateComponent } from "src/app/modules/story/story-create/story-create.component"

@Component({
	selector: "app-poker-screen",
	templateUrl: "./poker-screen.component.html",
	styleUrls: ["./poker-screen.component.css"]
})
export class PokerScreenComponent implements OnInit {
	poker!: any
	storyList!: Observable<UserStory[]>

	constructor(
		private storyService: StoryService,
		private pokerService: PokerService,
		private activatedRoute: ActivatedRoute,
		public dialog: MatDialog
	) {
		this.poker = this.activatedRoute.snapshot.data["poker"]
	}

	loadStories() {
		this.storyList = this.pokerService.getStoriesFromPoker(this.poker.id)
	}

	ngOnInit(): void {
		this.loadStories()
		this.storyService.emitNewStory.subscribe(() => this.loadStories())
	}

	openDialogCreateStory() {
		const dialogRef = this.dialog.open(StoryCreateComponent, {
			data: { idPoker: this.poker.id }
		})
	}
}
