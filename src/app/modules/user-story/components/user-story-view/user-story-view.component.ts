import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-story-view',
  templateUrl: './user-story-view.component.html',
  styleUrls: ['./user-story-view.component.css']
})
export class UserStoryViewComponent implements OnInit {
  @Input() idPoker!: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
