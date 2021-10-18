import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    const keys = Object.keys(this.formCreatePoker.get(field)?.errors || {});

    const key = keys[0];

    if(!key) return ''

    switch (key) {
      case 'required':
        return 'É obrigatório';
      case 'minlength':
        return `Não contém a quantidade minima de caracteres`;
      default:
        return 'Houve um erro';
    }
  }

}
