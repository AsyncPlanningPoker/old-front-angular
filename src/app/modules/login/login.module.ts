import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule
  ],
  exports: [ LoginComponent ]
})
export class LoginModule { }
