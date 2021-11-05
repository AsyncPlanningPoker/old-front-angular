import { Injectable } from "@angular/core"
import { JwtHelperService } from "@auth0/angular-jwt"
import * as jwt_decode from "jwt-decode";


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

	setJwtToLocalStorage(token: string) {
		const data = this.jwtHelper.decodeToken(token)
		localStorage.setItem("@planningPoker:token", token)
		localStorage.setItem("email", data.email)
		localStorage.setItem("exp", data.exp)
		localStorage.setItem("iat", data.iat)
		localStorage.setItem("name", data.name)
		localStorage.setItem("userId", data.userId)
	}

	removeJwtFromLocalStorage() {
		localStorage.removeItem("@planningPoker:token")
		localStorage.removeItem("username")
		localStorage.removeItem("userId")
	}

  	auth() {
		const token = this.storage.getItem('@planningPoker:token');
		const isExpired = this.jwtHelper.isTokenExpired(token || '');

		if (isExpired) return false
		return true
	}

	decode() {
		const token = this.storage.getItem("@planningPoker:token")
		const decodeToken = this.jwtHelper.decodeToken(token || "")
		return decodeToken ? decodeToken : ""
	}
}
