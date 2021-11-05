import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { validatorError } from 'src/app/shared/functions/validatorError';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  private storage: Storage;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
    this.storage = window.localStorage;
  }

  hide = true;
  isLoading = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(8)]],
    });
  }

  submitForm() {
    if (this.form.valid && this.form.dirty) {
      this.isLoading = true;
      this.userService.login(this.form.value).subscribe((res) => {
        const { token } = res
        this.authService.setJwtToLocalStorage(token)
        this.isLoading = false;
        this.router.navigate(['home']);
      });
    }
  }

  getErrorMessage(field: string){
    return validatorError(field, this.form);
  }
}