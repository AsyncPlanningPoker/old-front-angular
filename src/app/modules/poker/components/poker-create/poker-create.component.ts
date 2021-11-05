import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Poker } from 'src/app/core/interfaces/poker/poker';
import { PokerService } from 'src/app/core/services/poker/poker.service';
import { validatorError } from 'src/app/shared/functions/validatorError';

@Component({
  selector: 'app-poker-create',
  templateUrl: './poker-create.component.html',
  styleUrls: ['./poker-create.component.css']
})
export class PokerCreateComponent implements OnInit {
  poker: Poker = {
    name: ""
  }
  formCreatePoker!: FormGroup

  constructor(
    private pokerService: PokerService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.formCreatePoker = this.formBuilder.group({
      name: [, [Validators.required, Validators.minLength(3)]]
    });
  }

  createPoker(){
    this.poker.name = this.formCreatePoker.controls["name"].value
    this.pokerService.post(this.poker).subscribe(
      next => {
        this.dialog.closeAll()
      }
    )
  }

  getErrorMessage(field: string) {
    return validatorError(field, this.formCreatePoker);
  }
}
