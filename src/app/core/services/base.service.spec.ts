import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';

describe('BaseService', () => {
  let service: BaseService<any>;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = new BaseService('test', httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
