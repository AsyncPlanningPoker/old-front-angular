import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;

  private storage: Storage;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.storage = window.localStorage;
  }

  hide = true;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(8)]],
    });
  }

  submitForm() {
    if (this.form.valid && this.form.dirty) {
      this.loginService.login(this.form.value).subscribe((res) => {
        const { token } = res;

        this.storage.setItem('planning-poker-token', token);
        this.router.navigate(['home']);
      });
    }
  }

  getErrorMessage(field: string) {
    const keys = Object.keys(this.form.get(field)?.errors || {});

    const key = keys[0];

    if (!key) return '';

    switch (key) {
      case 'required':
        return 'É obrigatório';
      case 'email':
        return `E-mail inválido`;
      case 'minlength':
        return `Não contém a quantidade minima de caracteres`;
      default:
        return 'Houve um erro';
    }
  }
}
