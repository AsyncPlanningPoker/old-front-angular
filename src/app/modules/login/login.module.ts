import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { SignUpComponent } from './components/signUp/signUp.component';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

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
    MatTabsModule,
    RouterModule
  ],
  exports: []
})
export class LoginModule { }
