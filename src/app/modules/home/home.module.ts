import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home.component';
import { CreatePokerComponent } from './components/create-poker/create-poker.component';


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
