import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import { validatorError } from 'src/app/shared/functions/validatorError';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../form.component.css'],
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;

  private storage: Storage;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
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
      this.userService.login(this.form.value).subscribe((res) => {
        const { token } = res;

        this.storage.setItem('@planningPoker:token', token);
        this.router.navigate(['home']);
      });
    }
  }

  getErrorMessage(field: string){
    return validatorError(field, this.form);
  }

}
