import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule } from 'angular-notifier';
import { of } from 'rxjs';
import { RecoveryPasswordModule } from '../recovery-password.module';

import { ResetPasswordComponent } from './reset-password.component';

const ActivatedRouteSpy = {
  snapshot: {
    paramMap: convertToParamMap({
      some: 'some',
      else: 'else',
    })
  },
  queryParamMap: of(
    convertToParamMap({
      some: 'some',
      else: 'else',
    })
  )
};
const RouterSpy = jasmine.createSpyObj(
  'Router',
  ['navigate']
);

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordComponent ],
      imports: [ RecoveryPasswordModule, BrowserAnimationsModule, RouterTestingModule, NotifierModule ],
      providers: [
        { provide: ActivatedRoute,   useValue: ActivatedRouteSpy    },
        { provide: Router,           useValue: RouterSpy            }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
