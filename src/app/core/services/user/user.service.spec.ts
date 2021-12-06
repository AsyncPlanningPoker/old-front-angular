import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from "./user.service"
import { IAutoCompleteEmailPayload, IResetPassword, Login } from '../../interfaces/user/user';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ]
		});
		service = TestBed.inject(UserService);
		httpTestingController = TestBed.inject(HttpTestingController);
	});

	it("should be created", () => {
		expect(service).toBeTruthy()
	})

	it(`${UserService.prototype.login.name} should return the token autentication`, () => {
		const loginTest : Login =  {
			email: "teste@teste.com",
		password: "senha1234"
		}

		const mockData = {
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjo5OTk5OTk5OTk5fQ.QjN6AcFTkglczFhCINWyJT8RE2JrTo5tvsRXSdc3Zbk"
		}

		service.login(loginTest).subscribe(res => {
			expect(res).toEqual(mockData);
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/auth`);
		expect(req.request.method).toBe('POST');
		req.flush(mockData);
	})

	it(`${UserService.prototype.recoverPassword.name} should return success when the information is valid `, () => {

	const mockData = { success: true }

		service.recoverPassword({email : "teste@teste.com"}).subscribe(res => {
			expect(res).toEqual(mockData);
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/recover`);
		expect(req.request.method).toBe('POST');
		req.flush(mockData);
	})

	it(`${UserService.prototype.resetPassword.name} should return message of update when the information is valid `, () => {

	const resetPasswordTest : IResetPassword = {
		newPassword: "senha12345",
		token: "pIabrPjLtREUsIIsqEoA6DJiTynpkCUFA1D7NizGCiFgvJrUJcsfsuNcDq7GpnaY"
	}
	const mockData = { message: "Atualizado com sucesso" }

		service.resetPassword(resetPasswordTest).subscribe(res => {
			expect(res).toEqual(mockData);
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/recover/confirmation`);
		expect(req.request.method).toBe('POST');
		req.flush(mockData);
	})

	it(`${UserService.prototype.autoCompleteEmail.name} should return email started by partial `, () => {

	const autoCompleteEmailTest : IAutoCompleteEmailPayload = {
		partial: "teste"
	}
	const mockData = ["teste@teste.com", "teste2@teste.com"]

		service.autoCompleteEmail(autoCompleteEmailTest).subscribe(res => {
			expect(res).toEqual(mockData);
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/autoCompleteEmail?partial=teste`);
		expect(req.request.method).toBe('GET');
		req.flush(mockData);
	})


	afterEach(() => {
		httpTestingController.verify();
	});
})
