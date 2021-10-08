import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private loginService: LoginService
  ) {
    this.storage = window.localStorage;
  }

  hide = true;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [, [Validators.required, Validators.min(3)]],
      password: [, [Validators.required, Validators.min(1)]],
    });
  }

  submitForm() {
    this.loginService.login(this.form.value).subscribe((res) => {
      const { token } = res

      this.storage.setItem('planning-poker-token', token)
    });
  }
}
