import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { LoginModule } from "./modules/login/login.module"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HomeModule } from "./modules/home/home.module"
import { NavbarModule } from "./shared/components/navbar/navbar.module"
import { NotifierModule } from "angular-notifier"
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { HeaderInterceptor } from "./core/interceptors/header.interceptor"
import { ErrorInterceptor } from "./core/interceptors/error.interceptor"

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		BrowserAnimationsModule,
		LoginModule,
		HomeModule,
		NavbarModule,
		NotifierModule,
		HttpClientModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
