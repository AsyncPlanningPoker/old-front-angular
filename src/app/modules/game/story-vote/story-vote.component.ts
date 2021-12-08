import { Component, Input, OnInit } from "@angular/core"
import { FormBuilder, Validators } from "@angular/forms"
import { NotifierService } from "angular-notifier"
import { GetRoundResult } from "src/app/core/interfaces/round/round"
import { IRounds } from "src/app/core/interfaces/story/story"
import { AuthService } from "src/app/core/services/auth/auth.service"
import { RoundService } from "src/app/core/services/round/round.service"
import { VoteService } from "src/app/core/services/vote/vote.service"
import { FormComponent } from "src/app/shared/components/form/form.component"

@Component({
	selector: "app-vote",
	templateUrl: "./story-vote.component.html",
	styleUrls: ["./story-vote.component.css"]
})
export class StoryVoteComponent extends FormComponent implements OnInit {
	@Input() round!: IRounds
	cards = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
	roundRes!: GetRoundResult

	constructor(
		protected authService: AuthService,
		protected roundService: RoundService,
		protected voteService: VoteService,
		protected formBuilder: FormBuilder,
		private readonly notifierService: NotifierService
	) {
		super(authService, formBuilder, {
			voteNumber: [, Validators.required],
			voteComment: []
		})
	}

	ngOnInit(): void {
		this.roundService.getRoundById(this.round.id).subscribe( (res) => {
			this.roundRes = res
		})
	}

	onSubmit(idVote: string | undefined) {
		if (this.form.valid && this.form.dirty) {
			this.voteService.voteInRound((idVote ? idVote : ""), this.form.value).subscribe(() =>{
				this.notifierService.notify("success", "Round votado com sucesso")
			})
		}
	}

	createNewRound(idRound : string){
		this.roundService.createNextRound(idRound).subscribe(() => {
			this.notifierService.notify("success", "Novo round criado com sucesso")
		})
	}
}
