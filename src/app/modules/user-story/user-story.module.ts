import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserStoryRoutingModule } from './user-story-routing.module';
import { UserStoryViewComponent } from './components/user-story-view/user-story-view.component';


@NgModule({
  declarations: [
    UserStoryViewComponent
  ],
  imports: [
    CommonModule,
    UserStoryRoutingModule
  ],
  exports: [ UserStoryViewComponent ]
})
export class UserStoryModule { }
