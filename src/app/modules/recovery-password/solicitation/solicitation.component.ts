import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { NotifierService } from "angular-notifier"
import { finalize } from "rxjs/operators"
import { UserService } from "src/app/core/services/user/user.service"
import { validatorError } from "src/app/shared/functions/validatorError"

@Component({
	selector: "app-solicitation",
	templateUrl: "./solicitation.component.html",
	styleUrls: ["./solicitation.component.css"]
})
export class SolicitationComponent implements OnInit {
	form!: FormGroup
	isLoading = false

	constructor(
		private router: Router,
		private readonly notifierService: NotifierService,
		private userService: UserService,
		private formBuilder: FormBuilder
	) {}

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			email: [, [Validators.required, Validators.email]]
		})
	}

	submitForm() {
		if (this.form.valid && this.form.dirty) {
			this.isLoading = true
			this.userService
				.recoverPassword(this.form.value)
				.pipe(
					finalize(() => {
						this.isLoading = false
					})
				)
				.subscribe((res) => {
					this.notifierService.notify("success", "E-mail eviado com sucesso")
					this.isLoading = false
					this.router.navigate(["recovery-password", "sended"])
				})
		}
	}

	getErrorMessage(field: string) {
		return validatorError(field, this.form)
	}
}
