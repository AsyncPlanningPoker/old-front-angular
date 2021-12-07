import { ComponentFixture, TestBed } from "@angular/core/testing"
import { Router } from "@angular/router"
import { RouterTestingModule } from "@angular/router/testing"
import { StoreModule } from "@ngrx/store"
import { AuthService } from "src/app/core/services/auth/auth.service"

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
		interface StoreMock {
            [key: string]: string 
        }

        let store : StoreMock = {};
        const mockLocalStorage = {
            getItem: (key: string): string | null => {
                return key in store ? store[key] : null;
            },
            setItem: (key: string, value: string) => {
                console.log(value)
                store[key] = `${value}`;
            },
            removeItem: (key: string) => {
                if( key in store ) delete store[key]
            },
            clear: () => {
            store = {};
            }
          };
        spyOn(Object.getPrototypeOf(localStorage), 'getItem')
            .and.callFake(mockLocalStorage.getItem);
        spyOn(Object.getPrototypeOf(localStorage), 'setItem')
            .and.callFake(mockLocalStorage.setItem);
        spyOn(Object.getPrototypeOf(localStorage), 'removeItem')
            .and.callFake(mockLocalStorage.removeItem);
        spyOn(Object.getPrototypeOf(localStorage), 'clear')
            .and.callFake(mockLocalStorage.clear);
	})

	beforeAll(() => {
		localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjo5OTk5OTk5OTk5fQ.QjN6AcFTkglczFhCINWyJT8RE2JrTo5tvsRXSdc3Zbk")
	})
	
	afterAll(() => {
		localStorage.clear()
	})

	it('should create', () => {
	  	expect(component).toBeTruthy();
	});

	it(`${NavbarComponent.prototype.logOut.name} should remove token from local storage`, () => {
		localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjo5OTk5OTk5OTk5fQ.QjN6AcFTkglczFhCINWyJT8RE2JrTo5tvsRXSdc3Zbk")

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
