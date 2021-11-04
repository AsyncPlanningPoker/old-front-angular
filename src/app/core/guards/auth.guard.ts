import { Injectable } from "@angular/core"
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from "@angular/router"
import { Observable } from "rxjs"
import { AuthService } from "../services/auth/auth.service"

@Injectable({
	providedIn: "root"
})
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return this.verifyAuth(route.routeConfig?.path)
	}

	private verifyAuth(path: string | undefined) {
		const isLogin = path === "poker"

		if (this.authService.auth()) {
			if (isLogin) {
				this.router.navigate(["home"])
				return false
			}
			return true
		}

		if (isLogin) {
			return true
		}

		this.router.navigate(["poker", "login"])
		return false
	}
}
