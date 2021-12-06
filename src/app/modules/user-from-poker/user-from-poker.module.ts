import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { UserFromPokerTableComponent } from "./user-from-poker-table/user-from-poker-table.component"
import { SharedModule } from "src/app/shared/shared.module"

@NgModule({
	declarations: [UserFromPokerTableComponent],
	exports: [UserFromPokerTableComponent],
	imports: [CommonModule, SharedModule]
})
export class UserFromPokerModule {}
