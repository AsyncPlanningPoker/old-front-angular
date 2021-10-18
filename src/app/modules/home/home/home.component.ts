import { Component, OnInit } from '@angular/core';
import { PokerService } from 'src/app/core/services/Poker/poker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private pokerService: PokerService,
  ) { }

  ngOnInit(): void {
    this.pokerService.post({}).subscribe((res) => {
      console.log(res);

    });
  }

  createPoker(){
    
  }

}
