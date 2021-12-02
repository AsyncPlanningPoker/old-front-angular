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
	notRequiresAuthentication: boolean = false

	constructor(private authService: AuthService, private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		
		this.notRequiresAuthentication = route.data.notRequiresAuthentication || false

		if(this.notRequiresAuthentication) {
			if(this.authService.verifyIntegrityAuth()) {
				this.router.navigate(["poker"])
			}
			
			return true
		}
		else {
			if(this.authService.verifyIntegrityAuth()) {
				return true
			}

			this.router.navigate(["login"])
			return false
		}
	}
}
