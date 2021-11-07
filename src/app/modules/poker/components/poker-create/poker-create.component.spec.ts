import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokerModule } from '../../poker.module';

import { PokerCreateComponent } from './poker-create.component';

describe('PokerCreateComponent', () => {
  let component: PokerCreateComponent;
  let fixture: ComponentFixture<PokerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerCreateComponent ],
      imports: [ PokerModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
