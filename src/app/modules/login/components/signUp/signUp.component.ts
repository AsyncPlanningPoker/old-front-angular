import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css'],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  hide = true;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [, [Validators.required, Validators.email]],
      username: [, [Validators.required, Validators.minLength(3)]],
      password: [, [Validators.required, Validators.minLength(8)]],
    });
  }

  submitForm() {
    if (this.form.valid && this.form.dirty) {
      this.loginService.post(this.form.value).subscribe((res) => {
        console.log(res);

        this.router.navigate(['login']);
      });
    }
  }

  getErrorMessage(field: string) {
    const keys = Object.keys(this.form.get(field)?.errors || {});

    const key = keys[0];

    if(!key) return ''

    switch (key) {
      case 'required':
        return 'É obrigatório';
      case 'minlength':
        return `Não contém a quantidade minima de caracteres`;
      case 'email':
        return `E-mail inválido`;
      default:
        return 'Houve um erro';
    }
  }
}
