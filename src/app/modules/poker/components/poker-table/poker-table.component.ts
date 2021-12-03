import { Component, OnInit } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { Poker } from "src/app/core/interfaces/poker/poker"
import { PokerService } from "src/app/core/services/poker/poker.service"
import { PokerCreateComponent } from "../poker-create/poker-create.component"

@Component({
	selector: "poker-table",
	templateUrl: "./poker-table.component.html",
	styleUrls: ["./poker-table.component.css"]
})
export class PokerTableComponent implements OnInit {
	pokerList: Poker[] = []
	isLoading = true

	constructor(
		private pokerService: PokerService,
		public dialog: MatDialog
	) {
	}

	ngOnInit(): void {
		this.pokerService.getPokerRelatedToUser().subscribe( (pokers) => {
			this.pokerList= pokers
			this.isLoading = false
		})
		
	}

	createPoker() {
		const dialogRef = this.dialog.open(PokerCreateComponent)
		dialogRef.afterClosed().subscribe(result => {
			if(!! result){
				this.updateListPoker()
			}
		});
	}

	updateListPoker(){
		this.pokerService.getPokerRelatedToUser().subscribe((pokers) => {
			this.pokerList = pokers
		})
	}

}
