import { Component, OnInit } from '@angular/core';

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  title = 'planning-poker-front';
  private storage: Storage;
  isDarkTheme: boolean = false;

  constructor() {
    this.storage = window.localStorage;
  }

  ngOnInit() {
    const theme = this.storage.getItem('@planningPoker:theme');

    if (theme === 'dark') this.isDarkTheme = true;
  }
}
