import { Component, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"
import { MatDialog } from "@angular/material/dialog"
import { ActivatedRoute } from "@angular/router"
import { NotifierService } from "angular-notifier"
import { Observable } from "rxjs"
import { startWith, switchMap, take } from "rxjs/operators"
import { PokerStatus } from "src/app/core/enum/poker-status"
import { Poker } from "src/app/core/interfaces/poker/poker"
import { PokerService } from "src/app/core/services/poker/poker.service"
import { UserService } from "src/app/core/services/user/user.service"
import { PokerCreateComponent } from "../poker-create/poker-create.component"
import { Router } from "@angular/router"

@Component({
	selector: "app-poker-table",
	templateUrl: "./poker-table.component.html",
	styleUrls: ["./poker-table.component.css"]
})
export class PokerTableComponent implements OnInit {
	pokerList: Poker[] = []
	pokerStatus = PokerStatus

	formEmail = new FormControl()
	options: string[] = []
	filteredOptions!: Observable<any>

	constructor(
		private userService: UserService,
		private pokerService: PokerService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private notifierService: NotifierService,
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
