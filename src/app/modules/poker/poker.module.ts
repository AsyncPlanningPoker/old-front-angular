import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { PokerRoutingModule } from "./poker-routing.module"
import { PokerCreateComponent } from "./components/poker-create/poker-create.component"
import { PokerTableComponent } from "./components/poker-table/poker-table.component"
import { SharedModule } from "src/app/shared/shared.module"
import { PokerItemComponent } from "./components/poker-item/poker-item.component"
import { ConfirmDeleteComponent } from "./components/confirm-delete/confirm-delete.component"
import { ConfirmUpdateComponent } from "./components/confirm-update/confirm-update.component"

@NgModule({
	declarations: [
		PokerCreateComponent,
		PokerTableComponent,
		PokerItemComponent,
		ConfirmDeleteComponent,
		ConfirmUpdateComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		PokerRoutingModule,
	],
	exports: [PokerCreateComponent, PokerTableComponent]
})
export class PokerModule {}
