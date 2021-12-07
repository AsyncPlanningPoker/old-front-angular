import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule } from 'angular-notifier';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

import { PokerItemComponent } from './poker-item.component';

describe('PokerItemComponent', () => {
  let component: PokerItemComponent;
  let fixture: ComponentFixture<PokerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerItemComponent ],
      imports: [ NavbarModule, HttpClientModule, RouterTestingModule, NotifierModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
  });

	beforeAll(() => {
		localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjo5OTk5OTk5OTk5fQ.QjN6AcFTkglczFhCINWyJT8RE2JrTo5tvsRXSdc3Zbk")
	})
	
	afterAll(() => {
		localStorage.clear()
	})

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
