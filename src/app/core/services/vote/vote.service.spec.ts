import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Vote } from '../../interfaces/round/round';

import { VoteService } from './vote.service';

describe('VoteService', () => {
  let service: VoteService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(VoteService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${VoteService.prototype.voteInRound.name} should return the id of Vote`, () => {

    const mockVote: Vote = {
      voteNumber: 1,
      voteComment: "test"
    }

    const reqMock = {
      voteId: "1"
    }
    

		service.voteInRound("1", mockVote).subscribe(res => {
      expect(res).toEqual(reqMock)
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/1`);
		expect(req.request.method).toBe('PUT');
		req.flush(reqMock);
	})
});
