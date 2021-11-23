import { TestBed } from "@angular/core/testing"
import { ActionReducer, createAction, INIT, State, UPDATE } from "@ngrx/store"
import { persistMetaReducer } from "./persist.reducer"

describe(`${persistMetaReducer.name}`, () => {
	let storage: any

	beforeEach(async () => {
		await TestBed.configureTestingModule({}).compileComponents()
	})
	
	beforeEach(() => {
        
		storage = {"@planningPoker:state": "test"}
		// spyOn(localStorage, 'getItem').and.callFake((key) => key in storage ? storage[key] : null)
		// spyOn(localStorage, 'setItem').and.callFake((key, value) => (storage[key] = value + ''))
		// spyOn(localStorage, 'removeItem').and.callFake((key) => (storage.splice(key, 1)))
		// spyOn(localStorage, 'clear').and.callFake(() => (storage = {}))
        spyOn(localStorage, 'removeItem')
	})
})
