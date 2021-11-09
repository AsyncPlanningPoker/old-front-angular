import { Component, OnChanges, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { AuthService } from "./core/services/auth/auth.service"

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
	title = "planning-poker-front"
	private storage: Storage
	isDarkTheme: boolean = false
	isAuth = false
	theme$: Observable<string>

	constructor(
		private router: Router,
		private authService: AuthService,
		private store: Store<{ theme: string }>
	) {
		this.theme$ = store.select("theme")
		this.storage = window.localStorage
	}

	ngOnInit() {}

	isLoggedIn(): boolean {
		return !!this.authService.isLoggedIn()
	}
}
