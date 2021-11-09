import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = 'planning-poker-front';
  private storage: Storage;
  isDarkTheme: boolean = false;
  isAuth = false


  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.storage = window.localStorage;
  }

  ngOnInit() {
    const theme = this.storage.getItem('@planningPoker:theme');

    if (theme === 'dark') this.isDarkTheme = true;
  }

  isLoggedIn(): boolean {
    return !!this.authService.isLoggedIn()
  }
}
