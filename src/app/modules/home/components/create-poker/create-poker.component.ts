import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validatorError } from 'src/app/shared/functions/validatorError';

@Component({
  selector: 'app-create-poker',
  templateUrl: './create-poker.component.html',
  styleUrls: ['./create-poker.component.css']
})
export class CreatePokerComponent implements OnInit {

  formCreatePoker!: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formCreatePoker = this.formBuilder.group({
      pokerName: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  createPoker(){

  }

  getErrorMessage(field: string) {
    return validatorError(field, this.formCreatePoker);
  }

}
