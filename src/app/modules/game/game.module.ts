import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoryButtonComponent } from './story-button/story-button.component';



@NgModule({
  declarations: [
    GameComponent,
    StoryButtonComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GameModule { }
