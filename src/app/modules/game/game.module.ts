import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { GameComponent } from "./game.component"
import { SharedModule } from "src/app/shared/shared.module"
import { StoryButtonComponent } from "./story-button/story-button.component"
import { StoryListComponent } from "./story-list/story-list.component"
import { GameRoutingModule } from "./game-routing.module"
import { StoryAreaComponent } from "./story-area/story-area.component"
import { StoryVoteComponent } from "./story-vote/story-vote.component"

@NgModule({
	declarations: [
		GameComponent,
		StoryButtonComponent,
		StoryListComponent,
		StoryAreaComponent,
		StoryVoteComponent
	],
	imports: [CommonModule, SharedModule, GameRoutingModule]
})
export class GameModule {}
