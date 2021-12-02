import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { GameComponent } from "./game.component"
import { LoadPokerResolver } from "./get-poker.resolver"
import { StoryAreaComponent } from "./story-area/story-area.component"
import { StoryAreaResolver } from "./story-area/story-area.resolver"

const routes: Routes = [
	{
		path: ":idPoker",
		component: GameComponent,
		resolve: { poker: LoadPokerResolver },
		children: [
			{
				path: ":idStory",
				component: StoryAreaComponent,
				runGuardsAndResolvers: "paramsOrQueryParamsChange",
				resolve: { story: StoryAreaResolver }
			}
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GameRoutingModule {}
