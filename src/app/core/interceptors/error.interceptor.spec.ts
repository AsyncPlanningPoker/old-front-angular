import { HttpErrorResponse, HttpHandler, HttpRequest } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { NotifierModule, NotifierService } from "angular-notifier"
import { pipe, throwError } from "rxjs"
import { take } from "rxjs/operators"
import { CoreModule } from "../core.module"

import { ErrorInterceptor } from "./error.interceptor"

const notifierServiceSpy = jasmine.createSpyObj(NotifierService, ['notify'])

describe(`${ErrorInterceptor.name}`, () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [CoreModule, NotifierModule, RouterTestingModule],
			providers: [ ErrorInterceptor,
				{	provide: NotifierService,
					useValue: notifierServiceSpy	}
			]
		})
	})

	it("should be created", () => {
		const interceptor: ErrorInterceptor = TestBed.inject(ErrorInterceptor)
		expect(interceptor).toBeTruthy()
	})

	it(`${ErrorInterceptor.prototype.intercept.name} should call notifierService.notifier when http request return error`, done => {
		const interceptor: ErrorInterceptor = TestBed.inject(ErrorInterceptor)
		const httpRequestSpy = jasmine.createSpyObj(HttpRequest, ['doesNotMatter'])
		const httpHandlerSpy = jasmine.createSpyObj(HttpHandler, ['handle'])
		const error = { error: { status: 500, message: 'test-error' } }
		httpHandlerSpy.handle.and.returnValue(throwError(error))

		interceptor.intercept(httpRequestSpy, httpHandlerSpy).subscribe(
			result => {},
			error => {
				expect(notifierServiceSpy.notify).toHaveBeenCalledWith('error', 'test-error')
				done()
			}
		)
	})

	it(`${ErrorInterceptor.prototype.intercept.name} should throwError when http request return error`, done => {
		const interceptor: ErrorInterceptor = TestBed.inject(ErrorInterceptor)
		const httpRequestSpy = jasmine.createSpyObj(HttpRequest, ['doesNotMatter'])
		const httpHandlerSpy = jasmine.createSpyObj(HttpHandler, ['handle'])
		const error = { error: { status: 500, message: 'test-error' } }
		httpHandlerSpy.handle.and.returnValue(throwError(error))

		interceptor.intercept(httpRequestSpy, httpHandlerSpy).subscribe(
			result => {},
			error => {
				expect(error).toBe(`Error Code: ${error.status}, Message: ${error.message}`)
				done()
			}
		)
	})
})
