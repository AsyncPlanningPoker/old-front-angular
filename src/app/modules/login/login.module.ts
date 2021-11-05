import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginFormComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [],
  providers: [UserService]
})
export class LoginModule {}
