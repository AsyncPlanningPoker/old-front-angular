import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotifierModule } from 'angular-notifier';
import { Observable, of } from 'rxjs';
import { GameModule } from '../game.module';

import { StoryAreaComponent } from './story-area.component';

describe('StoryAreaComponent', () => {
  let component: StoryAreaComponent;
  let fixture: ComponentFixture<StoryAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryAreaComponent ],
      imports: [ GameModule, ReactiveFormsModule, HttpClientModule, NotifierModule ],
      providers: [
        { provide: ActivatedRoute, useValue: {
          data: of({
            story: {
              id: "string",
              name: "string",
              description: "string",
              idPoker: "string",
              createdAt: "string",
              updatedAt: "string",
              allRounds: []
            }
          })
        } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryAreaComponent);
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
