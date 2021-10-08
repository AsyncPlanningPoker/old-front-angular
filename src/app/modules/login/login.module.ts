import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { LoginRoutingModule } from './login.routing.module';
import { SignUpComponent } from './components/signUp/signUp.component';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule,
    LoginRoutingModule
  ],
  exports: []
})
export class LoginModule { }
