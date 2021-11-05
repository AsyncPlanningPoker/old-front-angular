import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { MatDialog } from "@angular/material/dialog"
import { Poker } from "src/app/core/interfaces/poker/poker"
import { AuthService } from "src/app/core/services/auth/auth.service"
import { PokerService } from "src/app/core/services/poker/poker.service"
import { FormComponent } from "src/app/shared/components/form/form.component"
import { validatorError } from "src/app/shared/functions/validatorError"

@Component({
	selector: "app-poker-create",
	templateUrl: "./poker-create.component.html",
	styleUrls: ["./poker-create.component.css"]
})
export class PokerCreateComponent extends FormComponent implements OnInit {
	poker: Poker = {
		name: ""
	}

	constructor(
		protected authService: AuthService,
		protected formBuilder: FormBuilder,
		private pokerService: PokerService,
		private dialog: MatDialog
	) {
		super(authService, formBuilder, {
			name: [, [Validators.required, Validators.minLength(3)]]
		})
	}

	ngOnInit(): void {}

	createPoker() {
		this.pokerService.post(this.form.value).subscribe((next) => {
			this.dialog.closeAll()
		})
	}

	getErrorMessage(field: string) {
		return validatorError(field, this.form)
	}
}
