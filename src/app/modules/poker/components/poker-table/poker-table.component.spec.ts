import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PokerModule } from '../../poker.module';

import { PokerTableComponent } from './poker-table.component';

describe('PokerTableComponent', () => {
  let component: PokerTableComponent;
  let fixture: ComponentFixture<PokerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerTableComponent ],
      imports: [ PokerModule ],
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
});
