import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PokerService } from 'src/app/core/services/poker/poker.service';
import { PokerModule } from '../../poker.module';

import { PokerTableComponent } from './poker-table.component';

describe('PokerTableComponent', () => {
  let component: PokerTableComponent;
  let fixture: ComponentFixture<PokerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerTableComponent ],
      imports: [ PokerModule, BrowserAnimationsModule ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {data: {pokerList: []}}
        }
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`${PokerTableComponent.prototype.updateListPoker.name} should set pokerList`, () => {
    let pokerService = TestBed.inject(PokerService)
    spyOn(pokerService, "getPokerRelatedToUser").and.returnValue(of([{
      idPoker: "string",
      name: "string",
      createdBy: "string",
      createdByEmail: "string",
      status: "Open"
    }]))

    component.updateListPoker()
    expect(component.pokerList).toEqual([{
      idPoker: "string",
      name: "string",
      createdBy: "string",
      createdByEmail: "string",
      status: "Open"
    }]);
  });
});
