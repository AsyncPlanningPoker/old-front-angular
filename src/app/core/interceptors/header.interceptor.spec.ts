import { HttpRequest } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"
import { Observable } from "rxjs"

import { HeaderInterceptor } from "./header.interceptor"

describe(`${HeaderInterceptor.name}`, () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			providers: [HeaderInterceptor]
		})
	)

	it("should be created", () => {
		const interceptor: HeaderInterceptor = TestBed.inject(HeaderInterceptor)
		expect(interceptor).toBeTruthy()
	})

	it(`${HeaderInterceptor.prototype.intercept.name} should set Authorization Header like "'Bearer' + token"`, () => {
		const interceptor: HeaderInterceptor = TestBed.inject(HeaderInterceptor)
		const request: HttpRequest<unknown> = new HttpRequest("GET", "test")
		const next: any = { handle: (request: HttpRequest<any>) => request }
		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjo5OTk5OTk5OTk5fQ.QjN6AcFTkglczFhCINWyJT8RE2JrTo5tvsRXSdc3Zbk"
		const Authorization = `Bearer ${token}`

		localStorage.setItem("token", token)

		expect(interceptor.intercept(request, next)).toEqual(
			next.handle(request.clone({ setHeaders: { Authorization }}))
		)

		localStorage.clear
	})
})
