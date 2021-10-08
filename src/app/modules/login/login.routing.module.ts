import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpComponent } from './components/signUp/signUp.component';
import { LoginComponent } from './login.component';

const lofinRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', component: LoginFormComponent },
      { path: 'signUp', component: SignUpComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(lofinRoutes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
