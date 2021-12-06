import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerItemComponent } from './poker-item.component';

describe('PokerItemComponent', () => {
  let component: PokerItemComponent;
  let fixture: ComponentFixture<PokerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
