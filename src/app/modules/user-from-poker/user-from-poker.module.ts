import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { UserFromPokerTableComponent } from "./user-from-poker-table/user-from-poker-table.component"

@NgModule({
	declarations: [UserFromPokerTableComponent],
	exports: [UserFromPokerTableComponent],
	imports: [CommonModule]
})
export class UserFromPokerModule {}
