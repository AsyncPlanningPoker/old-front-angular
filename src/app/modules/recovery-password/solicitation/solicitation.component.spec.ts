import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule } from 'angular-notifier';
import { RecoveryPasswordModule } from '../recovery-password.module';

import { SolicitationComponent } from './solicitation.component';

describe('SolicitationComponent', () => {
  let component: SolicitationComponent;
  let fixture: ComponentFixture<SolicitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationComponent ],
      imports: [ RecoveryPasswordModule, BrowserAnimationsModule, RouterTestingModule, NotifierModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
