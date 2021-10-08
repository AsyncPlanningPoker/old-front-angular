import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {

  form!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  hide = true;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [, [Validators.required, Validators.email]],
      username: [, [Validators.required, Validators.min(3)]],
      password: [, [Validators.required, Validators.min(1)]]
    })
  }

  submitForm() {

    this.loginService.post(this.form.value).subscribe(
      res => {
        console.log(res)
      }
    )
  }
}
