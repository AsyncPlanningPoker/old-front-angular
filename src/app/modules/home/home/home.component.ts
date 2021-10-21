import { Component, OnInit } from '@angular/core';
import { PokerService } from 'src/app/core/services/Poker/poker.service';
import { MatDialog} from '@angular/material/dialog';
import { CreatePokerComponent } from './create-poker/create-poker.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private pokerService: PokerService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.pokerService.post({}).subscribe((res) => {
      console.log(res);

    });
  }

  createPoker(){
    const dialogRef = this.dialog.open(CreatePokerComponent);
    
  }

}
