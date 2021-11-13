import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { Router } from "@angular/router"
import { OverlayContainer } from "@angular/cdk/overlay"
import { AuthService } from "src/app/core/services/auth/auth.service"

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input()
  isDarkTheme: boolean = false;

  @Output() isDarkThemeChange = new EventEmitter<boolean>();

  username: string = '';
  constructor(
    private authService: AuthService,
    private _overlayContainer: OverlayContainer,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.username = this.authService.getTokenInfo().email;
    this.loadingClass();
  }

  logOut() {
    const token = window.localStorage.getItem('token');
    if (token != null) {
      window.localStorage.removeItem('token');
    }
    this.router.navigate(['login']);
  }

  toggleTheme() {
    this.isDarkThemeChange.emit(this.isDarkTheme);
    window.localStorage.setItem(
      '@planningPoker:theme',
      this.isDarkTheme ? 'dark' : 'light'
    );

    this.loadingClass();
  }

  private loadingClass() {
    const overlayContainerClasses =
      this._overlayContainer.getContainerElement().classList;

    const themeClassesToRemove = Array.from(overlayContainerClasses).filter(
      (item: string) =>
        item.includes(!this.isDarkTheme ? 'dark-theme' : 'light-theme')
    );

    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }

    overlayContainerClasses.add(
      this.isDarkTheme ? 'dark-theme' : 'light-theme'
    );
  }
}
