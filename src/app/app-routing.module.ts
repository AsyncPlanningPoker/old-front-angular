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
    // loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    component: LoginComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
