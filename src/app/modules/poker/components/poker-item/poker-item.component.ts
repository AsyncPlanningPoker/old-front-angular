import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { startWith, switchMap, take,  } from 'rxjs/operators';
import { PokerStatus } from 'src/app/core/enum/poker-status';
import { playerPoker } from 'src/app/core/interfaces/poker/poker';
import { PokerService } from 'src/app/core/services/poker/poker.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'poker-item',
  templateUrl: './poker-item.component.html',
  styleUrls: ['./poker-item.component.css']
})
export class PokerItemComponent implements OnInit {

  @Input() idPoker!: string
  @Input() name!: string
  @Input() createdBy!: string
  @Input() status!: string

  isLoading = false
  players!: playerPoker[]
  pokerStatus = PokerStatus

	formEmail = new FormControl()
	options: string[] = []
	filteredOptions!: Observable<any>

  constructor(
    private userService: UserService,
		private pokerService: PokerService,
		private router: Router,
		private notifierService: NotifierService,
  ) { }

  ngOnInit(): void {
    this.filteredOptions = this.formEmail.valueChanges.pipe(
			startWith(""),
			switchMap((value) =>
				this.userService.autoCompleteEmail({ partial: value }).pipe(take(1))
			)
		)
  }

  addUser(idPoker: string | undefined) {
		if (this.formEmail.valid && this.formEmail.dirty) {
			this.pokerService
				.addUser({ idPoker, email: this.formEmail.value })
				.subscribe((next) => {
					this.notifierService.notify(
						"success",
						"Player adicionado criado com sucesso"
					)
				})
		}
	}

  navigateToGame(idPoker: any) {
		this.router.navigate(["game", idPoker])
	}

  loadPlayers(idPoker: string){
    this.isLoading = true;
    this.pokerService
      .getPlayersFromPoker(idPoker)
      .subscribe((players) => {
        this.players = players
        this.isLoading = false;
      })
  }
}
