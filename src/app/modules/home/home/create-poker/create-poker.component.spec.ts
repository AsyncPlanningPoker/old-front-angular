import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePokerComponent } from './create-poker.component';

describe('CreatePokerComponent', () => {
  let component: CreatePokerComponent;
  let fixture: ComponentFixture<CreatePokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
