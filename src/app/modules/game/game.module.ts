import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { GameComponent } from "./game.component"
import { SharedModule } from "src/app/shared/shared.module"
import { StoryButtonComponent } from "./story-button/story-button.component"
import { StoryListComponent } from "./story-list/story-list.component"
import { GameRoutingModule } from "./game-routing.module"
import { StoryAreaComponent } from "./story-area/story-area.component"
import { StoryVoteComponent } from "./story-vote/story-vote.component"
import { UserFromPokerTableComponent } from "./user-from-poker-table/user-from-poker-table.component"
import { StoryCreateComponent } from "./story-create/story-create.component"


@NgModule({
	declarations: [
		GameComponent,
		StoryButtonComponent,
		StoryListComponent,
		StoryAreaComponent,
		StoryVoteComponent,
		UserFromPokerTableComponent,
		StoryCreateComponent
	],
	imports: [CommonModule, SharedModule, GameRoutingModule]
})
export class GameModule {}
