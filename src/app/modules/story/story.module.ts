import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { StoryRoutingModule } from "./story-routing.module"
import { SharedModule } from "src/app/shared/shared.module"
import { StoryCreateComponent } from "./story-create/story-create.component"
import { StoryTableComponent } from "./story-table/story-table.component"

@NgModule({
	declarations: [StoryCreateComponent, StoryTableComponent],
	imports: [CommonModule, SharedModule, StoryRoutingModule],
	exports: [StoryCreateComponent, StoryTableComponent]
})
export class StoryModule {}
