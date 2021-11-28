import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'story-button',
  templateUrl: './story-button.component.html',
  styleUrls: ['./story-button.component.css']
})
export class StoryButtonComponent implements OnInit {

  @Input() title!: string
  @Input() details!: string
  @Input() storyId!: string

  constructor() { }

  ngOnInit(): void {
  }

}
