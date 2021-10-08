import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  { path: "**", redirectTo: "login",  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
