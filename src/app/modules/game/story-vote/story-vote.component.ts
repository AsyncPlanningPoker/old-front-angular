import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { FormBuilder, Validators } from "@angular/forms"
import { IRounds } from "src/app/core/interfaces/story/story"
import { AuthService } from "src/app/core/services/auth/auth.service"
import { FormComponent } from "src/app/shared/components/form/form.component"

interface IPayloadVote {
	vote: string
	idUser: string
	idRound: string
}

@Component({
	selector: "app-vote",
	templateUrl: "./story-vote.component.html",
	styleUrls: ["./story-vote.component.css"]
})
export class StoryVoteComponent extends FormComponent implements OnInit {
	@Input() round!: IRounds
	@Output() onSubmitEvent = new EventEmitter<IPayloadVote>()
	cards = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

	constructor(
		protected authService: AuthService,
		protected formBuilder: FormBuilder
	) {
		super(authService, formBuilder, {
			vote: [, Validators.required],
			comment: []
		})
	}

	ngOnInit(): void {
		if (this.round.allPokerUsers.length > 0) {
			this.form.controls["vote"].setValue(
				String(this.round.allPokerUsers[0].votes.vote)
			)
			this.form.controls["comment"].setValue(
				String(this.round.allPokerUsers[0].votes.comment)
			)
		}
	}

	onSubmit(idRound: string) {
		if (this.form.valid && this.form.dirty) {
			this.onSubmitEvent.emit({
				...this.form.value,
				idRound
			})
		}
	}
}
