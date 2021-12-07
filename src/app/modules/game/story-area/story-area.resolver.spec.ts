import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { StoryAreaResolver } from './story-area.resolver';

describe('StoryAreaResolver', () => {
  let resolver: StoryAreaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    resolver = TestBed.inject(StoryAreaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
