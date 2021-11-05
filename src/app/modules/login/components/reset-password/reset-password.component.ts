import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { NotifierService } from "angular-notifier"
import { finalize } from "rxjs/operators"
import { UserService } from "src/app/core/services/user/user.service"
import { validatorError } from "src/app/shared/functions/validatorError"

@Component({
	selector: "app-reset-password",
	templateUrl: "./reset-password.component.html",
	styleUrls: ["../../form.component.css"]
})
export class ResetPasswordComponent implements OnInit {
	form!: FormGroup
	isLoading = false
	token!: string | null
	hide = true

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private readonly notifierService: NotifierService,
		private userService: UserService,
		private formBuilder: FormBuilder
	) {}

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			newPassword: [, [Validators.required]]
		})

		this.token = this.route.snapshot.paramMap.get("token")
	}

	submitForm() {
		if (this.form.valid && this.form.dirty) {
			this.isLoading = true

			const payload = { ...this.form.value, token: this.token }

			this.userService
				.resetPassword(payload)
				.pipe(
					finalize(() => {
						this.isLoading = false
					})
				)
				.subscribe((res) => {
					this.notifierService.notify("success", "Senha redefinida")
					this.router.navigate(["login"])
				})
		}
	}

	getErrorMessage(field: string) {
		return validatorError(field, this.form)
	}
}
