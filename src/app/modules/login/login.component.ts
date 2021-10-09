import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messageLogIn = "Faça Log In para começar ou participar de um jogo.";
  messageSignUp = "Cadastre-se para adquirir acesso ao site."
  messageDisplay: string = this.messageLogIn;

  constructor() { }

  ngOnInit(): void {
  }

  changeOption(id : number){
    (id == 0 ?
        this.messageDisplay = this.messageLogIn :
        this.messageDisplay = this.messageSignUp);
  }
}
