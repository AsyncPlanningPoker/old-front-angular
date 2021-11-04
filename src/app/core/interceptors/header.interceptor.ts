import { Injectable } from "@angular/core"
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from "@angular/common/http"
import { Observable } from "rxjs"

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
	private storage: Storage

	constructor() {
		this.storage = window.localStorage
	}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		const token = this.storage.getItem("@planningPoker:token")
		const Authorization = `Bearer ${token}`

		return next.handle(request.clone({ setHeaders: { Authorization } }))
	}
}
