import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule, NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { IAddUser } from 'src/app/core/interfaces/poker/poker';
import { PokerService } from 'src/app/core/services/poker/poker.service';
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
  
  it(`${PokerItemComponent.prototype.addUser.name} should call addUser and notifierService`, () => {
    let notifierService = TestBed.inject(NotifierService)
    let pokerService = TestBed.inject(PokerService)

    spyOn(notifierService, "notify")
    spyOn(pokerService, "addUser")
        .and.callFake((payload: IAddUser) => { return new Observable(observer => {
          observer.next()
          observer.complete()
        })})

    component.formEmail.setErrors(null)
    component.formEmail.markAsDirty()
    
    component.addUser("id-test")

    expect(notifierService.notify).toHaveBeenCalledWith(
      "success",
      "Player adicionado criado com sucesso"
    )
    expect(pokerService.addUser).toHaveBeenCalled()
  });
  
  it(`${PokerItemComponent.prototype.closePoker.name} should  call closePoker and notifierService`, () => {
    let notifierService = TestBed.inject(NotifierService)
    let pokerService = TestBed.inject(PokerService)

    spyOn(notifierService, "notify")
    spyOn(pokerService, "closePoker")
        .and.callFake((idPoker: String) => { return new Observable(observer => {
          observer.next()
          observer.complete()
        })})
    
    component.closePoker("id-test")

    expect(notifierService.notify).toHaveBeenCalledWith(
      "success",
      "Player fechado criado com sucesso"
    )
    expect(pokerService.closePoker).toHaveBeenCalled()
    expect(component.status).toBe("Closed")
  });

  it(`${PokerItemComponent.prototype.navigateToGame.name} should navigate to 'game/1'`, () => {
    const idPoker = "id-test"
    let router = TestBed.inject(Router)

    spyOn(router, "navigate")

    component.navigateToGame(idPoker)

    expect(router.navigate).toHaveBeenCalledWith(["game", idPoker])
  });

  it(`${PokerItemComponent.prototype.loadPlayers.name} should set isLoading to false and set players`, () => {
    const idPoker = "id-test"
    let pokerService = TestBed.inject(PokerService)

    spyOn(pokerService, "getPlayersFromPoker")
        .and.callFake((idPoker: String) => { return new Observable(observer => {
          observer.next([{
            name: "player-test",
            email: "email-test"
          }])
          observer.complete()
        })})

    component.loadPlayers(idPoker)

    expect(pokerService.getPlayersFromPoker).toHaveBeenCalledWith(idPoker)
    expect(component.players).toEqual([{
      name: "player-test",
      email: "email-test"
    }])
    expect(component.isLoading).not.toBeTrue()
  });
});