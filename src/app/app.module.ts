import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { SharedModule } from "./shared/shared.module"
import { CoreModule } from "./core/core.module"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NavbarModule } from "./shared/components/navbar/navbar.module"
import { NotifierModule } from "angular-notifier"
import { GameModule } from "./modules/game/game.module"
import { StoreModule } from "@ngrx/store"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"

import { environment } from "../environments/environment" // Angular CLI environment
import { themeReducer } from "./core/reducers/theme.reducer"
import { metaReducers } from "./core/reducers";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NavbarModule,
		BrowserAnimationsModule,
		CoreModule,
		SharedModule,
		NotifierModule,
		GameModule,
		StoreModule.forRoot({ theme: themeReducer }, { metaReducers }),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production
		})
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
