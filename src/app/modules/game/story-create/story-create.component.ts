import { Component, Inject, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { AuthService } from "src/app/core/services/auth/auth.service"
import { FormComponent } from "src/app/shared/components/form/form.component"
import { validatorError } from "src/app/shared/functions/validatorError"
import { NotifierService } from "angular-notifier"
import { StoryService } from "src/app/core/services/story/story.service"
import { finalize } from "rxjs/operators"

export interface DialogData {
	idPoker: string
}

@Component({
	selector: "app-story-create",
	templateUrl: "./story-create.component.html",
	styleUrls: ["./story-create.component.css"]
})
export class StoryCreateComponent extends FormComponent implements OnInit {
	isLoading = false

	constructor(
		private storyService: StoryService,
		protected authService: AuthService,
		protected formBuilder: FormBuilder,

		@Inject(MAT_DIALOG_DATA) public data: DialogData,

		private dialog: MatDialog,
		private readonly notifierService: NotifierService
	) {
		super(authService, formBuilder, {
			name: [, [Validators.required, Validators.minLength(3)]],
			description: []
		})
	}

	ngOnInit(): void {}

	createStory() {
		if (this.form.valid && this.form.dirty) {
			this.isLoading = true

			this.storyService
				.post({ ...this.form.value, idPoker: this.data.idPoker })
				.pipe(
					finalize(() => {
						this.isLoading = false
					})
				)
				.subscribe((next) => {
					this.notifierService.notify("success", "Story criado com sucesso")
					this.storyService.emitNewStory.emit({})
					this.dialog.closeAll()
				})
		}
	}

	getErrorMessage(field: string) {
		return validatorError(field, this.form)
	}
}
