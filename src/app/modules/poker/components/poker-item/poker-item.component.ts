import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { FormControl } from "@angular/forms"
import { MatDialog } from "@angular/material/dialog"
import { Router } from "@angular/router"
import { NotifierService } from "angular-notifier"
import { PokerStatus } from "src/app/core/enum/poker-status"
import { playerPoker } from "src/app/core/interfaces/poker/poker"
import { AuthService } from "src/app/core/services/auth/auth.service"
import { PokerService } from "src/app/core/services/poker/poker.service"
import { UserService } from "src/app/core/services/user/user.service"
import { FormComponent } from "src/app/shared/components/form/form.component"
import { ConfirmDeleteComponent } from "../confirm-delete/confirm-delete.component"
import { ConfirmUpdateComponent } from "../confirm-update/confirm-update.component"

@Component({
	selector: "poker-item",
	templateUrl: "./poker-item.component.html",
	styleUrls: ["./poker-item.component.css"]
})
export class PokerItemComponent implements OnInit {
	@Output("updateListPoker") updateListPoker: EventEmitter<any> =
		new EventEmitter()
	@Input() idPoker!: string
	@Input() name!: string
	@Input() createdBy!: string
	@Input() createdByEmail!: string
	@Input() status!: string

	isLoading = false
	players!: playerPoker[]
	pokerStatus = PokerStatus
	verifyAuth = false
	formEmail = new FormControl()
	options: string[] = []
	filteredOptions: string[] = []

	constructor(
		private authService: AuthService,
		private userService: UserService,
		private pokerService: PokerService,
		private router: Router,
		private notifierService: NotifierService,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.verifyAuth =
			this.authService.getTokenInfo()!.email == this.createdByEmail
	}

	addUser(idPoker: string | undefined) {
		if (this.formEmail.valid && this.formEmail.dirty) {
			this.pokerService
				.addUser({ idPoker, email: this.formEmail.value })
				.subscribe((next) => {
					this.notifierService.notify(
						"success",
						"Player adicionado criado com sucesso"
					)
				})
		}
	}

	closePoker(idPoker: string) {
		this.pokerService.closePoker(idPoker).subscribe((next) => {
			this.status = "Closed"
			this.notifierService.notify(
				"success",
				"Player fechado criado com sucesso"
			)
		})
	}

	navigateToGame(idPoker: any) {
		this.router.navigate(["game", idPoker])
	}

	searchEmails(event: Event) {
		const value = (event.target as HTMLInputElement).value
		if (!!value) {
			const filtered = this.options.filter((option) => {
				return option.startsWith(value)
			})
			this.filteredOptions = filtered
			if (filtered.length == 0) {
				this.userService
					.autoCompleteEmail({ partial: value })
					.subscribe((res) => {
						this.options = res
						this.filteredOptions = res
					})
			}
		} else {
			this.filteredOptions = []
		}
	}

	loadPlayers(idPoker: string) {
		this.isLoading = true
		this.pokerService.getPlayersFromPoker(idPoker).subscribe((players) => {
			this.players = players
			this.isLoading = false
		})
	}

	deletePoker(idPoker: string) {
		const dialogRef = this.dialog.open(ConfirmDeleteComponent)
		dialogRef.afterClosed().subscribe((result) => {
			if (!!result) {
				this.pokerService.deletePokerById(idPoker).subscribe(() => {
					this.notifierService.notify("success", "Poker deletado com sucesso")
					this.updateListPoker.emit()
				})
			}
		})
	}

	updatePoker(idPoker: string) {
		const dialogRef = this.dialog.open(ConfirmUpdateComponent)
		dialogRef.afterClosed().subscribe((result) => {
			if (!!result) {
				this.pokerService.closePokerById(idPoker).subscribe(() => {
					this.notifierService.notify("success", "Poker fechado com sucesso")
					this.updateListPoker.emit()
				})
			}
		})
	}
}
