import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GetRoundResult, IResponseGetRoundById, Vote } from '../../interfaces/round/round';

import { RoundService } from './round.service';

describe('RoundService', () => {
  let service: RoundService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(RoundService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${RoundService.prototype.getRoundById.name} should return the current result of round when it were not voted`, () => {

    const mockVote: Vote = {
      voteNumber: null,
      voteComment: ""
    }
    const mockData: GetRoundResult = {
        isPokerOwner: false,
        status: "Open" ,
        voteUser: mockVote,
        voteId: "1",
        result: "NotDefined",
        max: null,
        min: null ,         
        nextRoundCreate: false
      }
    

		service.getRoundById("1").subscribe(res => {
      expect(res.result).toEqual("NotDefined")
      expect(res.voteUser.voteNumber).toBeNull()
      expect(res.voteUser.voteComment).toEqual("")
      expect(res.max).toBeNull()
      expect(res.min).toBeNull()
      expect(res.nextRoundCreate).toBeFalse()
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/1`);
		expect(req.request.method).toBe('GET');
		req.flush(mockData);
	})

  it(`${RoundService.prototype.getRoundById.name} should return the current result of round when it were voted but hasn't finished`, () => {

    const mockVote: Vote = {
      voteNumber: 1,
      voteComment: "test"
    }
    const mockData: GetRoundResult = {
        isPokerOwner: false,
        status: "Open" ,
        voteUser: mockVote,
        voteId: "1",
        result: "NotDefined",
        max: null,
        min: null ,         
        nextRoundCreate: false
      }
    

		service.getRoundById("1").subscribe(res => {
			expect(res.result).toEqual("NotDefined")
      expect(res.voteUser).toEqual(mockVote)
      expect(res.max).toBeNull()
      expect(res.min).toBeNull()
      expect(res.nextRoundCreate).toBeFalse()
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/1`);
		expect(req.request.method).toBe('GET');
		req.flush(mockData);
	})

  it(`${RoundService.prototype.getRoundById.name} should return the current result of round when it has finished with not unique result`, () => {

    const mockVoteUser: Vote = {
      voteNumber: 1,
      voteComment: "test"
    }

    const mockVoteMax: Vote = {
      voteNumber: 1,
      voteComment: "test"
    }

    const mockVoteMin: Vote = {
      voteNumber: 89,
      voteComment: "test"
    }

    const mockData: GetRoundResult = {
        isPokerOwner: false,
        status: "Open" ,
        voteUser: mockVoteUser,
        voteId: "1",
        result: "NotUnique",
        max: mockVoteMax,
        min: mockVoteMin,         
        nextRoundCreate: false
      }
    

		service.getRoundById("1").subscribe(res => {
			expect(res.result).toEqual("NotUnique")
      expect(res.voteUser).toEqual(mockVoteUser)
      expect(res.max).toEqual(mockVoteMax)
      expect(res.min).toEqual(mockVoteMin)
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/1`);
		expect(req.request.method).toBe('GET');
		req.flush(mockData);
	})

  it(`${RoundService.prototype.getRoundById.name} should return the current result of round when it has finished with unique result`, () => {

    const mockVoteUser: Vote = {
      voteNumber: 1,
      voteComment: "test"
    }
    const mockVoteUnique: Vote = {
      voteNumber: 1,
      voteComment: "test test"
    }

    const mockData: GetRoundResult = {
        isPokerOwner: false,
        status: "Open" ,
        voteUser: mockVoteUser,
        voteId: "1",
        result: "Unique",
        max: mockVoteUnique,
        min: mockVoteUnique,         
        nextRoundCreate: false
      }
    

		service.getRoundById("1").subscribe(res => {
			expect(res.result).toEqual("Unique")
      expect(res.voteUser).toEqual(mockVoteUser)
      expect(res.max).toEqual(mockVoteUnique)
      expect(res.min).toEqual(mockVoteUnique)
      expect(res.max == res.min).toBeTrue()
      expect(res.voteUser.voteNumber == res.max?.voteNumber).toBeTrue()
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/1`);
		expect(req.request.method).toBe('GET');
		req.flush(mockData);
	})

  it(`${RoundService.prototype.createNextRound.name} should return the next round created`, () => {

    const mockData: IResponseGetRoundById = {
      id: "1",
      roundNumber: 2,
      status: "Open",
      createdAt: "1",
      updatedAt: "1",
      idStory: "1",
    }

		service.createNextRound("1").subscribe(res => {
			expect(res).toEqual(mockData)
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/1/next`);
		expect(req.request.method).toBe('POST');
		req.flush(mockData);
	})

  afterEach(() => {
		httpTestingController.verify();
	});
});
