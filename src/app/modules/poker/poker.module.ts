import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { PokerRoutingModule } from "./poker-routing.module"
import { PokerCreateComponent } from "./components/poker-create/poker-create.component"
import { PokerTableComponent } from "./components/poker-table/poker-table.component"
import { SharedModule } from "src/app/shared/shared.module"
import { UserStoryModule } from "../user-story/user-story.module"

@NgModule({
	declarations: [PokerCreateComponent, PokerTableComponent],
	imports: [CommonModule, SharedModule, PokerRoutingModule, UserStoryModule],
	exports: [PokerCreateComponent, PokerTableComponent]
})
export class PokerModule {}
