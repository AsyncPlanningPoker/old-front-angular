import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule, NotifierService } from 'angular-notifier';

import { GameComponent } from './game.component';
import { GameModule } from './game.module';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      imports: [ GameModule, RouterTestingModule, NotifierModule, BrowserAnimationsModule ],
      providers: [
				{	provide: ActivatedRoute,
					useValue: {
						snapshot: {
							data: {
								poker: false
							}
						}
					}
				}
			]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

  it(`${GameComponent.prototype.navigateToPoker.name} should navigate to /poker`, () => {
    const router = TestBed.inject(Router)
    
    spyOn(router, "navigate")
    component.navigateToPoker()

    expect(router.navigate).toHaveBeenCalledWith(["poker"]);
  });
});
