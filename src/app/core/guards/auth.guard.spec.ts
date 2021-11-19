import { Component } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ActivatedRoute, ActivatedRouteSnapshot, convertToParamMap, Router, RouterStateSnapshot } from "@angular/router"
import { RouterTestingModule } from "@angular/router/testing"
import { routes } from "src/app/app-routing.module"
import { AuthService } from "../services/auth/auth.service"

import { AuthGuard } from "./auth.guard"

describe(`${AuthGuard.name}`, () => {
	let mockSnapshot: any = jasmine.createSpyObj<RouterStateSnapshot>("RouterStateSnapshot", ['toString']);

	let guard: AuthGuard
	let authService: AuthService
	let router: Router
	let route: ActivatedRoute

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes(routes)
			],
			providers: [
				AuthGuard,
				{	provide: ActivatedRoute,
					useValue: {
						snapshot: {
							data: {
								notRequiresAuthentication: false
							}
							// paramMap: convertToParamMap({}),
							// routeConfig: {
							// 	path: ""
							// }
						}
					}
				},
				{	provide: RouterStateSnapshot,
					useValue: mockSnapshot
				}
			]
		})
	})

	beforeEach(() => {
		authService = TestBed.inject(AuthService)
		router = TestBed.inject(Router)
		guard = new AuthGuard(authService, router)
		
		route = TestBed.inject(ActivatedRoute);
	})

	it("should be created", () => {
		expect(guard).toBeTruthy()
	})

	it(`should ${AuthGuard.prototype.canActivate.name} return true when notRequiresAuthentication is true`, () => {
		route.snapshot.data.notRequiresAuthentication = true
		expect(guard.canActivate(route.snapshot, mockSnapshot)).toBeTrue()
	})

	it(`should ${AuthGuard.prototype.canActivate.name} return true when token is valid and notRequiresAuthentication is false`, () => {
		const validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjo5OTk5OTk5OTk5fQ.QjN6AcFTkglczFhCINWyJT8RE2JrTo5tvsRXSdc3Zbk"
		window.localStorage.setItem('token', validToken)

		expect(guard.canActivate(route.snapshot, mockSnapshot)).toBeTrue()
	})
	it(`should ${AuthGuard.prototype.canActivate.name} return false when token is not valid and notRequiresAuthentication is false`, () => {
		const notValidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjoxNjM2NzQzOTA0fQ.CshfjBD1RHtMtHeQAryYeetwWUzuO2m5s4k74irPrns"
		window.localStorage.setItem('token', notValidToken)

		expect(guard.canActivate(route.snapshot, mockSnapshot)).not.toBeTrue()
	})
})
