import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { Router } from "@angular/router"
import { OverlayContainer } from "@angular/cdk/overlay"
import { AuthService } from "src/app/core/services/auth/auth.service"
import { Store } from "@ngrx/store"
import { setTheme } from "src/app/core/actions/theme.actions"
import { Observable } from "rxjs"

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
	theme$: Observable<string>
	isDarkTheme!: boolean
	username: string = ""

	constructor(
		private authService: AuthService,
		private _overlayContainer: OverlayContainer,
		private router: Router,
		private store: Store<{ theme: string }>
	) {
		this.theme$ = store.select("theme")
	}

	ngOnInit(): void {
		this.theme$.subscribe((theme) => {
			this.isDarkTheme = theme == "dark"
		})

		this.username = this.authService.getTokenInfo().email
		this.loadingClass()
	}

	rederectToPokerPage() {
		this.router.navigate(["poker"])
	}

	logOut() {
		const token = window.localStorage.getItem("token")
		if (token != null) {
			window.localStorage.removeItem("token")
		}
		this.router.navigate(["login"])
	}

	toggleTheme() {
		this.store.dispatch(
			setTheme({ theme: this.isDarkTheme ? "dark" : "ligth" })
		)

		this.loadingClass()
	}

	private loadingClass() {
		const overlayContainerClasses =
			this._overlayContainer.getContainerElement().classList

		const themeClassesToRemove = Array.from(overlayContainerClasses).filter(
			(item: string) =>
				item.includes(!this.isDarkTheme ? "dark-theme" : "light-theme")
		)

		if (themeClassesToRemove.length) {
			overlayContainerClasses.remove(...themeClassesToRemove)
		}

		overlayContainerClasses.add(this.isDarkTheme ? "dark-theme" : "light-theme")
	}
}
