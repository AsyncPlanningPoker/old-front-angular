import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameModule } from '../game.module';

import { StoryButtonComponent } from './story-button.component';

describe('StoryButtonComponent', () => {
  let component: StoryButtonComponent;
  let fixture: ComponentFixture<StoryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryButtonComponent ],
      imports: [ GameModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
