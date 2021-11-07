import { TestBed } from '@angular/core/testing';
import { PokerModule } from '../../poker.module';

import { PokerTableResolver } from './poker-table.resolver';

describe('PokerTableResolver', () => {
  let resolver: PokerTableResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ PokerModule ]
    });
    resolver = TestBed.inject(PokerTableResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
