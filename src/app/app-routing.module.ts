import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/components/login/login.component';
import { SignUpComponent } from './modules/sign-up/components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./modules/poker/poker.module').then(m => m.PokerModule)
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  // {
  //   path: "",
  //   loadChildren: () => import('./modules/poker/poker.module').then(m => m.PokerModule),
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: "",
  //   component: PokerTableComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: "login",
  //   loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: "poker",
  //   loadChildren: () => import('./modules/poker/poker.module').then(m => m.PokerModule),
  //   canActivate: [AuthGuard],
  // },
  // { path: 'login', component: LoginFormComponent, canActivate: [AuthGuard] },
  // { path: 'signUp', component: SignUpComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
