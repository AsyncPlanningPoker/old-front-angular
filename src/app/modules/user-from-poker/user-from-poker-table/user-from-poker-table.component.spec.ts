import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFromPokerTableComponent } from './user-from-poker-table.component';

describe('UserFromPokerTableComponent', () => {
  let component: UserFromPokerTableComponent;
  let fixture: ComponentFixture<UserFromPokerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFromPokerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFromPokerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
