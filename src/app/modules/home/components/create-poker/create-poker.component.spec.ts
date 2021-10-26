import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { CreatePokerComponent } from './create-poker.component';

describe('CreatePokerComponent', () => {
  let component: CreatePokerComponent;
  let fixture: ComponentFixture<CreatePokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePokerComponent ],
      imports: [ MatIconModule, MatDialogModule ],
      providers: [ FormBuilder ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.formCreatePoker.markAsTouched();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
