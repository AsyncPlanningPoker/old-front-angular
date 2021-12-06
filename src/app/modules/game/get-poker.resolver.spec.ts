import { TestBed } from "@angular/core/testing"

import { LoadPokerResolver } from "./get-poker.resolver"

describe("LoadPokerResolver", () => {
	let resolver: LoadPokerResolver

	beforeEach(() => {
		TestBed.configureTestingModule({})
		resolver = TestBed.inject(LoadPokerResolver)
	})

	it("should be created", () => {
		expect(resolver).toBeTruthy()
	})
})
