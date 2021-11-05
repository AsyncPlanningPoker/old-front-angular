import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NavbarModule } from "./shared/components/navbar/navbar.module"
import { NotifierModule } from "angular-notifier"
import { HeaderInterceptor } from "./core/interceptors/header.interceptor"
import { ErrorInterceptor } from "./core/interceptors/error.interceptor"
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserStoryModule } from './modules/user-story/user-story.module';

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
    NotifierModule,
    UserStoryModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
