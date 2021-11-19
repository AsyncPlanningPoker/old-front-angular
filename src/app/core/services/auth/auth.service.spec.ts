import { TestBed } from "@angular/core/testing"

import { AuthService } from "./auth.service"

describe(`${AuthService.name}`, () => {
	let service: AuthService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.inject(AuthService)
	})

	it("should be created", () => {
		expect(service).toBeTruthy()
	})
	
	it(`${AuthService.prototype.setJwtToLocalStorage.name} should set token to localStorage`, () => {
		const validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjo5OTk5OTk5OTk5fQ.QjN6AcFTkglczFhCINWyJT8RE2JrTo5tvsRXSdc3Zbk"
		
		service.setJwtToLocalStorage(validToken)

		expect(localStorage.getItem("token")).toBe(validToken)
	})

	it(`${AuthService.prototype.setJwtToLocalStorage.name} should set token to localStorage`, () => {
		const validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjo5OTk5OTk5OTk5fQ.QjN6AcFTkglczFhCINWyJT8RE2JrTo5tvsRXSdc3Zbk"
		
		service.setJwtToLocalStorage(validToken)

		expect(localStorage.getItem("token")).toBe(validToken)
	})

	it(`${AuthService.prototype.removeJwtFromLocalStorage.name} should return true when called with not expired token`, () => {
		const notExpiredToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjo5OTk5OTk5OTk5fQ.QjN6AcFTkglczFhCINWyJT8RE2JrTo5tvsRXSdc3Zbk"
		
		localStorage.setItem("token", notExpiredToken)

		expect(service.auth()).toBeTrue()
	})

	it(`${AuthService.prototype.removeJwtFromLocalStorage.name} should return false then called with expired token`, () => {
		const expiredToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjoxNjM2NzQzOTA0fQ.CshfjBD1RHtMtHeQAryYeetwWUzuO2m5s4k74irPrns"
		
		localStorage.setItem("token", expiredToken)
		service.removeJwtFromLocalStorage()

		expect(localStorage.getItem("token")).toBe(null)
	})
})
