import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseService } from './services/base.service';
import { LoginService } from './services/login/login.service';
import { PokerService } from './services/Poker/poker.service';
import { HeaderInterceptor } from './interceptors/header.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    PokerService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ]
})
export class CoreModule { }
