import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreatePokerComponent } from './home/create-poker/create-poker.component';




@NgModule({
  declarations: [
    HomeComponent,
    CreatePokerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
