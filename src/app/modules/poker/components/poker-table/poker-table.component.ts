import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PokerStatus } from 'src/app/core/enum/poker-status';
import { Poker } from 'src/app/core/interfaces/poker/poker';
import { PokerCreateComponent } from '../poker-create/poker-create.component';

@Component({
  selector: 'app-poker-table',
  templateUrl: './poker-table.component.html',
  styleUrls: ['./poker-table.component.css']
})
export class PokerTableComponent implements OnInit {
  pokerList: Poker[] = []
  pokerStatus = PokerStatus

  constructor(
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.pokerList = this.activatedRoute.snapshot.data['pokerList']
  }

  ngOnInit(): void {
  }

  createPoker() {
    const dialogRef = this.dialog.open(PokerCreateComponent)
  }
}
