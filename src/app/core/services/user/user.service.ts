import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import {
	SignUp,
	Login,
	IResetPassword,
	IAutoCompleteEmailPayload
} from "../../interfaces/user/user"
import { BaseService } from "../base.service"

@Injectable({
	providedIn: "root"
})
export class UserService extends BaseService<SignUp> {
	constructor(protected httpClient: HttpClient) {
		super("/api/users", httpClient)
	}

	login(payload: Login) {
		return this.httpClient.post<any>(
			`${this.baseUrl}/auth`,
			payload,
			this.httpOptions
		)
	}

	recoverPassword(payload: any) {
		return this.httpClient.post<any>(
			`${this.baseUrl}/recover`,
			payload,
			this.httpOptions
		)
	}

	resetPassword(payload: IResetPassword) {
		return this.httpClient.post<any>(
			`${this.baseUrl}/recover/confirmation`,
			payload,
			this.httpOptions
		)
	}

	autoCompleteEmail(payload: IAutoCompleteEmailPayload) {
		return this.httpClient.get<any>(`${this.baseUrl}/autoCompleteEmail`, {
			...this.httpOptions,
			params: { ...payload }
		})
	}
}
