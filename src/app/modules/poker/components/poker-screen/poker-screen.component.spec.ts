import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerScreenComponent } from './poker-screen.component';

describe('PokerScreenComponent', () => {
  let component: PokerScreenComponent;
  let fixture: ComponentFixture<PokerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
