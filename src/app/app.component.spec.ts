import { Location } from "@angular/common"
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing"
import { Router } from "@angular/router"
import { RouterTestingModule } from "@angular/router/testing"
import { routes } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AppModule } from "./app.module"
import { AuthGuard } from "./core/guards/auth.guard"

describe(`${AppComponent.name}`, () => {
	let component: AppComponent
	let fixture: ComponentFixture<AppComponent>
	let storage: any

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppModule, RouterTestingModule.withRoutes(routes)],
			declarations: [AppComponent]
		}).compileComponents()
	})
	
	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;

		storage = {}
		spyOn(localStorage, 'getItem').and.callFake((key) => key in storage ? storage[key] : null)
		spyOn(localStorage, 'setItem').and.callFake((key, value) => (storage[key] = value + ''))
		spyOn(localStorage, 'clear').and.callFake(() => (storage = {}))
		
		localStorage.clear()
	});

	it("should create the app", () => {
		expect(component).toBeTruthy()
	})

	it(`should have as title 'planning-poker-front'`, () => {
		expect(component.title).toEqual("planning-poker-front")
	})

	// it(`should nagivate to poker`, fakeAsync(() => {
	// 	let router = TestBed.inject(Router);
	// 	let location = TestBed.inject(Location);

	// 	router.initialNavigation()
	// 	router.navigateByUrl('/poker');
	// 	fixture.detectChanges();
	// 	tick()

	// 	expect(location.path()).toBe('/poker');
	// }))
})
