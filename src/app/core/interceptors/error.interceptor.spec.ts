import { TestBed } from "@angular/core/testing"
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { NotifierModule, NotifierService } from "angular-notifier"
import { CoreModule } from "../core.module"

import { ErrorInterceptor } from "./error.interceptor"

describe("ErrorInterceptor", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [CoreModule, NotifierModule, RouterTestingModule],
			providers: [ ErrorInterceptor ]
		})
	})

	it("should be created", () => {
		const interceptor: ErrorInterceptor = TestBed.inject(ErrorInterceptor)
		expect(interceptor).toBeTruthy()
	})
})
