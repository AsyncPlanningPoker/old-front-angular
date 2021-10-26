import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PokerService } from './poker.service';

describe('PokerService', () => {
  let service: PokerService;
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new PokerService(httpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
