import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokerModule } from '../../poker.module';

import { ConfirmUpdateComponent } from './confirm-update.component';

describe('ConfirmUpdateComponent', () => {
  let component: ConfirmUpdateComponent;
  let fixture: ComponentFixture<ConfirmUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmUpdateComponent ],
      imports: [ PokerModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
