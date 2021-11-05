import { Component, Inject, OnInit } from "@angular/core"
import { FormBuilder, FormGroup } from "@angular/forms"
import { Token } from "src/app/core/interfaces/token/token"
import { AuthService } from "src/app/core/services/auth/auth.service"

@Component({
	selector: "app-form",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
	form: FormGroup
	userLogged: Token

	constructor(
		protected authService: AuthService,
		protected formBuilder: FormBuilder,
		@Inject("group") group: object = {}
	) {
		this.userLogged = this.authService.getTokenInfo()
		this.form = this.formBuilder.group({
			...group,
			...{ idUser: this.userLogged.userId }
		})
	}

	ngOnInit(): void {}
}
