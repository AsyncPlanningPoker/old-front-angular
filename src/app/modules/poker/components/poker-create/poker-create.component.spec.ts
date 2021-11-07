import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokerModule } from '../../poker.module';

import { PokerCreateComponent } from './poker-create.component';

describe('PokerCreateComponent', () => {
  let component: PokerCreateComponent;
  let fixture: ComponentFixture<PokerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerCreateComponent ],
      imports: [ PokerModule, BrowserAnimationsModule ]
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
