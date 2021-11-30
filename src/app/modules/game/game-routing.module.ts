import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game.component';
import { StoryAreaComponent } from './story-area/story-area.component';

const routes: Routes = [
  { path: '',  component: GameComponent,
    children: [
      { path: ':idStory', component: StoryAreaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule { }
