import { ComponentFixture, TestBed } from "@angular/core/testing"
import { MatIconModule } from "@angular/material/icon"
import { RouterTestingModule } from "@angular/router/testing"
import { CoreModule } from "src/app/core/core.module"
import { HomeModule } from "../home.module"

import { HomeComponent } from "./home.component"

describe("HomeComponent", () => {
	let component: HomeComponent
	let fixture: ComponentFixture<HomeComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HomeModule, CoreModule, RouterTestingModule, MatIconModule]
		}).compileComponents()

		fixture = TestBed.createComponent(HomeComponent)
	})

	it("should create", () => {
		const instance = fixture.componentInstance
		expect(instance).toBeTruthy()
	})
})
