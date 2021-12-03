import { Component, OnInit } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { ActivatedRoute } from "@angular/router"
import { Poker } from "src/app/core/interfaces/poker/poker"
import { PokerCreateComponent } from "../poker-create/poker-create.component"

@Component({
	selector: "app-poker-table",
	templateUrl: "./poker-table.component.html",
	styleUrls: ["./poker-table.component.css"]
})
export class PokerTableComponent implements OnInit {
	pokerList: Poker[] = []

	constructor(

		private activatedRoute: ActivatedRoute,

		public dialog: MatDialog
	) {
		this.pokerList = this.activatedRoute.snapshot.data["pokerList"]
		console.log(this.pokerList)
	}

	ngOnInit(): void {
		
	}


	createPoker() {
		const dialogRef = this.dialog.open(PokerCreateComponent)
	}

}
