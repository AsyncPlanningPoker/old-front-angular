import { Injectable } from "@angular/core"
import { JwtHelperService } from "@auth0/angular-jwt"
import { BehaviorSubject, Observable } from "rxjs"
import { Token } from "../../interfaces/token/token"

@Injectable({
	providedIn: "root"
})

export class AuthService {
	private jwtHelper: JwtHelperService
	private isLoggedIn$: BehaviorSubject<boolean>

	constructor() {
		this.jwtHelper = new JwtHelperService()
		this.isLoggedIn$ = new BehaviorSubject<boolean>(this.verifyIntegrityAuth());
	}

	getTokenInfo(): Token {
		const token = localStorage.getItem("token")
		return this.decodeJWT(token as string)
	}

	setJwtToLocalStorage(token: string) {
		localStorage.setItem("token", token)
		this.isLoggedIn$.next(this.verifyIntegrityAuth())
	}

	removeJwtFromLocalStorage() {
		localStorage.removeItem("token")
		this.isLoggedIn$.next(this.verifyIntegrityAuth())
	}


	verifyIntegrityAuth(): boolean{
		const token = localStorage.getItem("token") || ""
		return !this.jwtHelper.isTokenExpired(token)
	}

	isLoggedIn(): Observable<boolean>{
		return this.isLoggedIn$.asObservable();
	}

	decodeJWT(token: string) {
		const decodeToken = this.jwtHelper.decodeToken(token || "")
		return decodeToken ? decodeToken : ""
	}
}
