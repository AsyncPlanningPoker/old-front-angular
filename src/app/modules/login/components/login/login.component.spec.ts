import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/app/core/services/user/user.service';
import { LoginModule } from '../../login.module';

import { LoginComponent } from './login.component';

describe(LoginComponent.name, () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService: UserService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ LoginModule, RouterTestingModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userService = TestBed.inject(UserService)

    spyOn(userService, 'login')
    
    component.form = (new FormBuilder).group({
      email: ["", [Validators.required, Validators.email]],
      checkemail: [false],
      password: [, [Validators.required, Validators.minLength(8)]],
    })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
