import { TestBed } from "@angular/core/testing"
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { validatorError } from "./validatorError"

describe(`ValidatorError`, () => {
    const form = new FormGroup({
        fakeControl: new FormControl('fakeControl')
    });

	beforeEach(async () => {
		await TestBed.configureTestingModule({})
	})

	beforeEach(() => {})

	it(`should return '' when form all valid`, () => {
		expect(validatorError("test", form)).toBe('')
	})

    // it(``, () => {
    //     form.controls["fakeControl"].addValidators([Validators.required])
    //     form.controls["fakeControl"].setValue("")

	// 	expect(validatorError("test", form)).toBe('É obrigatório')
    // })
})
