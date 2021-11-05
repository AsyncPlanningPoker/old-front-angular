import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerCreateComponent } from './poker-create.component';

describe('PokerCreateComponent', () => {
  let component: PokerCreateComponent;
  let fixture: ComponentFixture<PokerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerCreateComponent ]
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
