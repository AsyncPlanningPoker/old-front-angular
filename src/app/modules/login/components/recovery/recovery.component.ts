import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { NotifierService } from "angular-notifier"
import { finalize } from "rxjs/operators"
import { UserService } from "src/app/core/services/user/user.service"
import { validatorError } from "src/app/shared/functions/validatorError"

@Component({
	selector: "app-recovery",
	templateUrl: "./recovery.component.html",
	styleUrls: ["../../form.component.css"]
})
export class RecoveryComponent implements OnInit {
	form!: FormGroup
	isLoading = false
	sended = false

	constructor(
		// private router: Router,
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
					this.sended = true
				})
		}
	}

	getErrorMessage(field: string) {
		return validatorError(field, this.form)
	}
}
