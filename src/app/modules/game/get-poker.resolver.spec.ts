import { TestBed } from "@angular/core/testing"
import { GameModule } from "./game.module"

import { LoadPokerResolver } from "./get-poker.resolver"

describe("LoadPokerResolver", () => {
	let resolver: LoadPokerResolver

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ GameModule ]
		})
		resolver = TestBed.inject(LoadPokerResolver)
	})

	it("should be created", () => {
		expect(resolver).toBeTruthy()
	})
})
