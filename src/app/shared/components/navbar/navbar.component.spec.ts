import { ComponentFixture, TestBed } from "@angular/core/testing"
import { Router } from "@angular/router"
import { RouterTestingModule } from "@angular/router/testing"
import { StoreModule } from "@ngrx/store"

import { NavbarComponent } from "./navbar.component" 
import { NavbarModule } from "./navbar.module"

describe(NavbarComponent.name, () => {
	let component: NavbarComponent
	let fixture: ComponentFixture<NavbarComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ NavbarComponent ],
			imports: [ NavbarModule, RouterTestingModule, StoreModule.forRoot({}) ]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(NavbarComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
	  	expect(component).toBeTruthy();
	});

	it(`${NavbarComponent.prototype.logOut.name} should remove token from local storage`, () => {
		localStorage.setItem("token", "test")

		component.logOut()

		expect(localStorage.getItem("token")).toBeNull()
	})

	it(`${NavbarComponent.prototype.logOut.name} should navigate to 'login'`, () => {
		const router = TestBed.inject(Router)
		spyOn(router, "navigate")

		component.logOut()

		expect(router.navigate).toHaveBeenCalledWith(["login"])
	})
})
