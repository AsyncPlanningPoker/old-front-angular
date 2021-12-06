import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-update',
  templateUrl: './confirm-update.component.html',
  styleUrls: ['./confirm-update.component.css']
})
export class ConfirmUpdateComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<ConfirmUpdateComponent>,
  ) { }

  ngOnInit(): void {
  }

}
