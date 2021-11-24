import { Component, Input, OnInit } from "@angular/core"
import { Observable } from "rxjs"
import { UserStory } from "src/app/core/interfaces/user-story/user-story"
import { PokerService } from "src/app/core/services/poker/poker.service"

@Component({
	selector: "app-story-table",
	templateUrl: "./story-table.component.html",
	styleUrls: ["./story-table.component.css"]
})
export class StoryTableComponent implements OnInit {
	@Input() storyList!: UserStory[] | null

	constructor(private pokerService: PokerService) {}

	ngOnInit(): void {}
}
