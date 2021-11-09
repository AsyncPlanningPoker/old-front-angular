import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokerTableComponent } from './components/poker-table/poker-table.component';
import { PokerTableResolver } from './components/poker-table/poker-table.resolver';

const routes: Routes = [
  {
    path: "",
    component: PokerTableComponent,
    resolve: { pokerList: PokerTableResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokerRoutingModule { }
