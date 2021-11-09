import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NavbarModule } from "./shared/components/navbar/navbar.module"
import { NotifierModule } from "angular-notifier"
import { UserStoryModule } from './modules/user-story/user-story.module';
import { GameModule } from './modules/game/game.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    NotifierModule,
    UserStoryModule,
    GameModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
