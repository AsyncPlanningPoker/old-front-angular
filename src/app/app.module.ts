import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from './modules/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { NotifierModule} from 'angular-notifier';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './core/interceptors/header.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { PokerModule } from './modules/poker/poker.module';
import { SignUpModule } from './modules/sign-up/sign-up.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    BrowserAnimationsModule,
    NotifierModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
