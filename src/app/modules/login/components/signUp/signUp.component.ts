import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {

  form!: FormGroup;
  sub!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  hide = true;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      username: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnDestroy(){
      this.sub.unsubscribe();
  }

  submitForm() {
    if(this.form.valid && this.form.dirty){
      this.sub =this.loginService.post(this.form.value).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['login']);
        });
    }
  }
}
