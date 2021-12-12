import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoryService } from './story.service';
import { IResponseGetStoryById, IStory, IRounds } from '../../interfaces/story/story';

describe('StoryService', () => {
  let service: StoryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    service = TestBed.inject(StoryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${StoryService.prototype.getStoryById.name} should return the story`, () => {

    const mockDataRounds: IRounds[] = [
      {
        id: "1",
        roundNumber: 1,
        status: "Open",
        createdAt: "1",
        updatedAt: "1",
        idStory: "1"
      }
    ]
    const mockDataStory: IStory = {
      id: "1",
      name: "teste",
      description: "teste",
      idPoker: "1",
      createdAt: "1",
      updatedAt: "1",
      allRounds: mockDataRounds
    }
		const mockData: IResponseGetStoryById = {
      data: mockDataStory
		}

		service.getStoryById("1").subscribe(res => {
			expect(res).toEqual(mockData);
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/1`);
		expect(req.request.method).toBe('GET');
		req.flush(mockData);
	})

  it(`${StoryService.prototype.findAllRounds.name} should return all rounds`, () => {

    const mockData: IRounds[] = [
      {
        id: "1",
        roundNumber: 1,
        status: "Open",
        createdAt: "1",
        updatedAt: "1",
        idStory: "1",
      }
    ]

		service.findAllRounds("1").subscribe(res => {
			expect(res).toEqual(mockData);
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/1/rounds`);
		expect(req.request.method).toBe('GET');
		req.flush(mockData);
	})

  afterEach(() => {
		httpTestingController.verify();
	});
});
