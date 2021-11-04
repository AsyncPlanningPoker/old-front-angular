import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { PokerService } from 'src/app/core/services/Poker/poker.service';
import { CreatePokerComponent } from './create-poker/create-poker.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private storage: Storage;

  isDarkTheme: boolean = false;

  constructor(private pokerService: PokerService, public dialog: MatDialog) {
    this.storage = window.localStorage;
  }

  ngOnInit(): void {
    this.pokerService.get().subscribe((res) => {
      console.log(res);
    });

    const theme = this.storage.getItem('@planningPoker:theme');

    if (theme === 'dark') this.isDarkTheme = true;
  }

  createPoker() {
    const dialogRef = this.dialog.open(CreatePokerComponent);
  }
}
