import { Component, OnChanges, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Store } from "@ngrx/store"
import { NgxSpinnerService } from "ngx-spinner"
import { Observable } from "rxjs"
import { LoaderInterceptorStatus } from "./core/interceptors/loader.interceptor"
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
		private store: Store<{ theme: string }>,
		private spinnerService: NgxSpinnerService,
		private loaderInterceptorStatus: LoaderInterceptorStatus
	) {
		this.theme$ = this.store.select("theme")
		this.isLoggedIn$ = this.authService.isLoggedIn()

		this.loaderInterceptorStatus.getStatus().subscribe(
			(status: boolean) => {
				if(status) {
					this.spinnerService.show()
				}
				else {
					this.spinnerService.hide()
				}
			}
		)
	}

	ngOnInit() {

	}
}
