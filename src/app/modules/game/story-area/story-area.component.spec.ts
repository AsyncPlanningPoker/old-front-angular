import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryAreaComponent } from './story-area.component';

describe('StoryVoteComponent', () => {
  let component: StoryAreaComponent;
  let fixture: ComponentFixture<StoryAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
