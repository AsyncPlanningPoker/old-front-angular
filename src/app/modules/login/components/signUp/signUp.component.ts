import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { UserService } from 'src/app/core/services/user/user.service';
import { validatorError } from 'src/app/shared/functions/validatorError';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['../../form.component.css'],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private readonly notifierService : NotifierService
  ) {}

  hide = true;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [, [Validators.required, Validators.email]],
      name: [, [Validators.required, Validators.minLength(3)]],
      password: [, [Validators.required, Validators.minLength(8)]],
    });
  }

  submitForm() {
    if (this.form.valid && this.form.dirty) {
      this.userService.post(this.form.value).subscribe((res) => {
        console.log(res);
        this.notifierService.notify('success', "Conta criada com sucesso. Logue-se para começar a jogar!");
        this.router.navigate(['login']);
      });
    }
  }

  getErrorMessage(field: string) {
    return validatorError(field, this.form);
  }
}
