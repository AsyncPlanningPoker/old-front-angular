import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }


  submitForm() {
    if(this.form.valid && this.form.dirty){
      this.loginService.login(this.form.value).subscribe((res) => {
        const { token } = res
        this.storage.setItem('planning-poker-token', token);
        this.loginService.setHeader(token);
        this.router.navigate(['home']);
      });
    }
  }
}
