import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { validatorError } from "src/app/shared/functions/validatorError"
import { PokerService } from "src/app/core/services/Poker/poker.service"
import { AuthService } from "src/app/core/services/auth/auth.service" // retirar quando mudarem o banco
import { finalize } from "rxjs/operators"
import { MatDialogRef} from '@angular/material/dialog';

@Component({
	selector: "app-create-poker",
	templateUrl: "./create-poker.component.html",
	styleUrls: ["./create-poker.component.css"]
})
export class CreatePokerComponent implements OnInit {
	formCreatePoker!: FormGroup
	constructor(
		private formBuilder: FormBuilder,
		private pokerService: PokerService,
		public dialogRef: MatDialogRef<CreatePokerComponent>,
		private authService: AuthService 
	) {}

	isLoading = false

	ngOnInit(): void {
		this.formCreatePoker = this.formBuilder.group({
			pokerName: [null, [Validators.required, Validators.minLength(3)]]
		})
	}

	createPoker() {
		if (this.formCreatePoker.valid && this.formCreatePoker.dirty) {
			this.isLoading = true
			const data = this.formCreatePoker.value
			data.createdBy = this.authService.decode().userId // criando interface para o post
			this.pokerService
				.post(data)
				.pipe(
					finalize(() => {
						this.isLoading = false
					})
				)
				.subscribe(res => {
				this.dialogRef.close("created");
			})
		}
	}

	getErrorMessage(field: string) {
		return validatorError(field, this.formCreatePoker)
	}
}
