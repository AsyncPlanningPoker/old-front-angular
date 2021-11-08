import { Component, OnInit } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { NotifierService } from "angular-notifier"
import { PokerService } from "src/app/core/services/Poker/poker.service"
import { CreatePokerComponent } from "./create-poker/create-poker.component"

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
	private storage: Storage

	isDarkTheme = false

	constructor(
		private pokerService: PokerService,
		public dialog: MatDialog,
		private readonly notifierService: NotifierService) {
		this.storage = window.localStorage
	}

	ngOnInit(): void {
		this.pokerService.get().subscribe((res) => {
			console.log(res)
		})

		const theme = this.storage.getItem("@planningPoker:theme")

		if (theme === "dark") this.isDarkTheme = true
	}

	createPoker() {
		const dialogRef = this.dialog.open(CreatePokerComponent)
		dialogRef.afterClosed()
			.subscribe(res =>{
				if(!!res){
					this.notifierService.notify(
						"success",
						"Poker criado com sucesso"
					)
				}
			})
	}
}
