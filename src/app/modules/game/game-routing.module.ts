import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { PokerScreenResolver } from "./poker-screen.resolver"
import { GameComponent } from "./game.component"
import { StoryAreaComponent } from "./story-area/story-area.component"
import { StoryAreaResolver } from "./story-area/story-area.resolver"

const routes: Routes = [
	{
		path: ":idPoker",
		component: GameComponent,
		resolve: { poker: PokerScreenResolver },
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
