import { Injectable } from "@angular/core"
import { JwtHelperService } from "@auth0/angular-jwt"
import { Token } from "../../interfaces/token/token"

@Injectable({
	providedIn: "root"
})
export class AuthService {
	private storage: Storage
	private jwtHelper

	constructor() {
		this.storage = window.localStorage
		this.jwtHelper = new JwtHelperService()
	}

	getTokenInfo(): Token {
		const token = localStorage.getItem("token")
		return this.decodeJWT(token as string)
	}

	setJwtToLocalStorage(token: string) {
		localStorage.setItem("token", token)
	}

	removeJwtFromLocalStorage() {
		localStorage.removeItem("token")
	}

	isLoggedIn(): boolean {
		const token = localStorage.getItem("token") || ""
		return !this.jwtHelper.isTokenExpired(token)
	}

	auth() {
		const token = this.storage.getItem("token")
		const isExpired = this.jwtHelper.isTokenExpired(token || "")

		if (isExpired) return false
		return true
	}

	decodeJWT(token: string) {
		const decodeToken = this.jwtHelper.decodeToken(token || "")
		return decodeToken ? decodeToken : ""
	}
}
