import { TestBed } from "@angular/core/testing"

import { AuthService } from "./auth.service"

describe(`${AuthService.name}`, () => {
	let service: AuthService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.inject(AuthService)

		/*interface StoreMock {
			[key: string]: string 
		}

		let store : StoreMock;
		const mockLocalStorage = {
			getItem: (key: string): string | null => {
				return key in store ? store[key] : null;
			},
			setItem: (key: string, value: string) => {
				store[key] = `${value}`;
			},
			removeItem: (key: string) => {
				delete store[key];
			},
			clear: () => {
			store = {};
			}
  		};
		spyOn(localStorage, 'getItem')
			.and.callFake(mockLocalStorage.getItem);
		spyOn(localStorage, 'setItem')
			.and.callFake(mockLocalStorage.setItem);
		spyOn(localStorage, 'removeItem')
			.and.callFake(mockLocalStorage.removeItem);
		spyOn(localStorage, 'clear')
			.and.callFake(mockLocalStorage.clear);*/
	})

	it("should be created", () => {
		expect(service).toBeTruthy()
	})
	
	it(`${AuthService.prototype.setJwtToLocalStorage.name} should set token to localStorage`, () => {
		localStorage.removeItem("token")
		const validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjo5OTk5OTk5OTk5fQ.QjN6AcFTkglczFhCINWyJT8RE2JrTo5tvsRXSdc3Zbk"
		
		service.setJwtToLocalStorage(validToken)

		expect(localStorage.getItem("token")).toBe(validToken)
	})

	it(`${AuthService.prototype.removeJwtFromLocalStorage.name} should remove token to localStorage`, () => {
		localStorage.removeItem("token")
		const expiredToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjoxNjM2NzQzOTA0fQ.CshfjBD1RHtMtHeQAryYeetwWUzuO2m5s4k74irPrns"
		
		localStorage.setItem("token", expiredToken)
		service.removeJwtFromLocalStorage()

		expect(localStorage.getItem("token")).toBe(null)
	})

	it(`${AuthService.prototype.verifyIntegrityAuth.name} should return true when called with not expired token`, () => {
		localStorage.removeItem("token")
		const notExpiredToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjo5OTk5OTk5OTk5fQ.QjN6AcFTkglczFhCINWyJT8RE2JrTo5tvsRXSdc3Zbk"
		
		localStorage.setItem("token", notExpiredToken)

		expect(service.verifyIntegrityAuth()).toBeTrue()
	})

	it(`${AuthService.prototype.verifyIntegrityAuth.name} should return false when called with expired token`, () => {
		localStorage.removeItem("token")
		const expiredToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjoxNjM2NzQzOTA0fQ.CshfjBD1RHtMtHeQAryYeetwWUzuO2m5s4k74irPrns"
		
		localStorage.setItem("token", expiredToken)

		expect(service.verifyIntegrityAuth()).toBeFalse()
	})

	it(`${AuthService.prototype.isLoggedIn.name} should return true in BehaviorSubject when token is valid`, () => {
		localStorage.removeItem("token")
		const validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjo5OTk5OTk5OTk5fQ.QjN6AcFTkglczFhCINWyJT8RE2JrTo5tvsRXSdc3Zbk"
		service.setJwtToLocalStorage(validToken)

		service.isLoggedIn().subscribe(value => {
			expect(value).toBeTrue()
		})
	})

	it(`${AuthService.prototype.isLoggedIn.name} should return false in BehaviorSubject when token is invalid`, () => {
		localStorage.removeItem("token")
		const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjoxNjM2NzQzOTA0fQ.CshfjBD1RHtMtHeQAryYeetwWUzuO2m5s4k74irPrns"
		service.setJwtToLocalStorage(invalidToken)

		service.isLoggedIn().subscribe(value => {
			expect(value).toBeFalse()
		})
	})


	it(`${AuthService.prototype.getTokenInfo.name} should return the correct information of token`, () => {
		localStorage.removeItem("token")
		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdGUiLCJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsInVzZXJJZCI6ImNjNGZhM2JlLTg0NzAtNGUzOS05ZDZhLTMxZTdlZjE1MTIwMiIsImlhdCI6MTYzODY3Mzg4Mn0.RVZtwUZblf_O50JQk79UsUo874BDQCxKuGUGOvqRdlQ"
		service.setJwtToLocalStorage(token)

		expect(service.getTokenInfo()).toEqual({
			name: "teste",
			email: "teste@teste.com",
			userId: "cc4fa3be-8470-4e39-9d6a-31e7ef151202",
			iat: 1638673882
		})
	})

	it(`${AuthService.prototype.getTokenInfo.name} should return the correct information of null token`, () => {
		localStorage.removeItem("token")
		const token = ""
		service.setJwtToLocalStorage(token)

		expect(service.getTokenInfo()).toBeNull()
	})

})
