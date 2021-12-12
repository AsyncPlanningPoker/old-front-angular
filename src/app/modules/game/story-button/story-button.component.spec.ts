import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GameModule } from '../game.module';

import { StoryButtonComponent } from './story-button.component';

describe('StoryButtonComponent', () => {
  let component: StoryButtonComponent;
  let fixture: ComponentFixture<StoryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryButtonComponent ],
      imports: [ GameModule, RouterTestingModule.withRoutes([]) ]
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

  it(`${StoryButtonComponent.prototype.onClickStory.name} should navigate to ['test2', 'test3', 'storyTestId']`, () => {
    const router = TestBed.inject(Router)
    
    spyOn(router, "navigate")
    spyOnProperty(router, 'url', 'get').and.returnValue('"test1/test2/test3/test4/test5"');

    component.onClickStory("storyTestId")

    expect(router.navigate).toHaveBeenCalledWith(['test2', 'test3', 'storyTestId'])
  })
});
