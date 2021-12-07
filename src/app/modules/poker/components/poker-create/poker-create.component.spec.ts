import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule, NotifierService } from 'angular-notifier';
import { PokerModule } from '../../poker.module';

import { PokerCreateComponent } from './poker-create.component';

describe('PokerCreateComponent', () => {
  let component: PokerCreateComponent;
  let fixture: ComponentFixture<PokerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerCreateComponent ],
      imports: [ PokerModule, BrowserAnimationsModule, NotifierModule ],
      providers: [ {provide: MatDialogRef, useValue: {}} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerCreateComponent);
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
