import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-logo-screen',
  templateUrl: './logo-screen.component.html',
  styleUrls: ['./logo-screen.component.css']
})
export class LogoScreenComponent implements OnInit {
  @Input() childTemplate!: TemplateRef<HTMLElement>

  constructor() { }

  ngOnInit(): void {
  }

}
