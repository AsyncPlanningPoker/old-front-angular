import { TestBed } from '@angular/core/testing';

import { PokerTableResolver } from './poker-table.resolver';

describe('PokerTableResolver', () => {
  let resolver: PokerTableResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PokerTableResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
