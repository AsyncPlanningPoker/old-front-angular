import { Component, Input, OnInit } from "@angular/core"
import { playerPoker } from "src/app/core/interfaces/poker/poker"
import { PokerService } from "src/app/core/services/poker/poker.service"

@Component({
	selector: "app-user-from-poker-table",
	templateUrl: "./user-from-poker-table.component.html",
	styleUrls: ["./user-from-poker-table.component.css"]
})
export class UserFromPokerTableComponent implements OnInit {
	@Input() idPoker!: string
	players!: playerPoker[]

	constructor(private pokerService: PokerService) {}

	ngOnInit(): void {
		this.pokerService.getPlayersFromPoker(this.idPoker).subscribe((players) => {
			this.players = players
		})
	}
}
