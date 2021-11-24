import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { PokerScreenComponent } from "./components/poker-screen/poker-screen.component"
import { PokerScreenResolver } from "./components/poker-screen/poker-screen.resolver"
import { PokerTableComponent } from "./components/poker-table/poker-table.component"
import { PokerTableResolver } from "./components/poker-table/poker-table.resolver"

const routes: Routes = [
	{
		path: "",
		component: PokerTableComponent,
		resolve: { pokerList: PokerTableResolver }
	},
	{
		path: ":idPoker",
		component: PokerScreenComponent,
		resolve: { poker: PokerScreenResolver }
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PokerRoutingModule {}
