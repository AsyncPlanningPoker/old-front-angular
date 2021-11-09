import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { MatDialog } from "@angular/material/dialog"
import { finalize } from "rxjs/operators"
import { Poker } from "src/app/core/interfaces/poker/poker"
import { AuthService } from "src/app/core/services/auth/auth.service"
import { PokerService } from "src/app/core/services/poker/poker.service"
import { FormComponent } from "src/app/shared/components/form/form.component"
import { validatorError } from "src/app/shared/functions/validatorError"
import { NotifierService } from "angular-notifier"

@Component({
	selector: "app-poker-create",
	templateUrl: "./poker-create.component.html",
	styleUrls: ["./poker-create.component.css"]
})
export class PokerCreateComponent extends FormComponent implements OnInit {
	poker: Poker = {
		name: ""
	}

	isLoading = false

	constructor(
		protected authService: AuthService,
		protected formBuilder: FormBuilder,
		private pokerService: PokerService,
		private dialog: MatDialog,
		private readonly notifierService: NotifierService
	) {
		super(authService, formBuilder, {
			name: [, [Validators.required, Validators.minLength(3)]]
		})
	}

	ngOnInit(): void {}

	createPoker() {
		if (this.form.valid && this.form.dirty) {
			this.isLoading = true
			this.pokerService
				.post(this.form.value)
				.pipe(
					finalize(() => {
						this.isLoading = false
					})
				)
				.subscribe((next) => {
					this.notifierService.notify("success", "Poker criado com sucesso")
					this.dialog.closeAll()
				})
		}
	}

	getErrorMessage(field: string) {
		return validatorError(field, this.form)
	}
}
