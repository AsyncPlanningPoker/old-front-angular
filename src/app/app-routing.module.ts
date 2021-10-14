import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './modules/home/home/home.component';
import { LoginFormComponent } from './modules/login/components/login-form/login-form.component';
import { SignUpComponent } from './modules/login/components/signUp/signUp.component';

const routes: Routes = [
  {
    path: "poker",
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    canActivate: [AuthGuard],
  },
  // { path: 'login', component: LoginFormComponent, canActivate: [AuthGuard] },
  // { path: 'signUp', component: SignUpComponent, canActivate: [AuthGuard] },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'poker/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
