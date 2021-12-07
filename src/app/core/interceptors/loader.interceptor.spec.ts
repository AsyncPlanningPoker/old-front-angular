import { TestBed } from '@angular/core/testing';

import { LoaderInterceptor, LoaderInterceptorStatus } from './loader.interceptor';

describe('LoaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoaderInterceptor,
      LoaderInterceptorStatus
    ]
  }));

  it('should be created', () => {
    const interceptor: LoaderInterceptor = TestBed.inject(LoaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
