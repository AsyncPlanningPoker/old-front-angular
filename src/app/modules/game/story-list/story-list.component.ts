import { Component, Input, OnInit } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { UserStory } from "src/app/core/interfaces/user-story/user-story"
import { StoryCreateComponent } from "../../story/story-create/story-create.component"

@Component({
	selector: "story-list",
	templateUrl: "./story-list.component.html",
	styleUrls: ["./story-list.component.css"]
})
export class StoryListComponent implements OnInit {
	@Input() storyList!: UserStory[] | null
	@Input() idPoker!: string

	constructor(public dialog: MatDialog) {}

	ngOnInit(): void {}

	openDialogCreateStory() {
		const dialogRef = this.dialog.open(StoryCreateComponent, {
			data: { idPoker: this.idPoker }
		})
	}
}
