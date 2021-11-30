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
	theme$: Observable<string>
	isLoggedIn$: Observable<boolean>

	constructor(
		private authService: AuthService,
		private store: Store<{ theme: string }>
	) {
		this.theme$ = this.store.select("theme")
		this.isLoggedIn$ = this.authService.isLoggedIn()
	}

	ngOnInit() {

	}
}
