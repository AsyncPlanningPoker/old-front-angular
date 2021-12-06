import { TestBed } from "@angular/core/testing"
import { PokerService } from "./poker.service"
import { playerPoker, Poker, IResponseGetPokerById, IAddUser } from "../../interfaces/poker/poker";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserStory } from "../../interfaces/user-story/user-story";


describe("PokerService", () => {
	let service: PokerService
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ]
		})

		service = TestBed.inject(PokerService);
		httpTestingController = TestBed.inject(HttpTestingController);
	})

	it("should be created", () => {
		expect(service).toBeTruthy()
	})


	it(`${PokerService.prototype.getPokerRelatedToUser.name} should return a list of pokers`, () => {
		const mockData : Poker[] = [
			{
				idPoker: "teste",
				name: "teste",
				createdBy: "string",
				createdByEmail: "teste@teste.com",
				status: "Open"
			},
			{
				idPoker: "teste2",
				name: "teste2",
				createdBy: "teste2",
				createdByEmail: "teste2@teste.com",
				status: "Closed"
			}

		]

		service.getPokerRelatedToUser().subscribe(res => {
			expect(res).toEqual(mockData);
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/fromUser`);
		expect(req.request.method).toBe('GET');
		req.flush(mockData);
	})


	it(`${PokerService.prototype.getPlayersFromPoker.name} should return a list of poker's players`, () => {
		const mockData : playerPoker[] = [
			{
				
				name: "teste",
				email: "teste@teste.com"
			},
			{
				name: "teste2",
				email: "teste2@teste.com"
			}

		]

		service.getPlayersFromPoker("1").subscribe(res => {
			expect(res).toEqual(mockData);
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/1/playersByPoker`);
		expect(req.request.method).toBe('GET');
		req.flush(mockData);
	})

	it(`${PokerService.prototype.getPokerById.name} should return a response with the poker`, () => {
		const poker : Poker =  {
			idPoker: "teste",
			name: "teste",
			createdBy: "string",
			createdByEmail: "teste@teste.com",
			status: "Open"
		}

		const mockData : IResponseGetPokerById = {
			data: poker
		}

		service.getPokerById("1").subscribe(res => {
			expect(res).toEqual(mockData);
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/1`);
		expect(req.request.method).toBe('GET');
		req.flush(mockData);
	})

	it(`${PokerService.prototype.deletePokerById.name} should return id of deleted poker`, () => {
		const mockData = {
			id: "1"
		}

		service.deletePokerById("1").subscribe(res => {
			expect(res).toEqual(mockData);
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/1`);
		expect(req.request.method).toBe('DELETE');
		req.flush(mockData);
	})


	it(`${PokerService.prototype.closePokerById.name} should return id of deleted poker`, () => {
		const mockData = {
			updateId: "1"
		}

		service.closePokerById("1").subscribe(res => {
			expect(res).toEqual(mockData);
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/1/closePoker`);
		expect(req.request.method).toBe('PUT');
		req.flush(mockData);
	})

	it(`${PokerService.prototype.getStoriesFromPoker.name} should return a list of poker's players`, () => {
		const mockData : UserStory[] = [
			{
				id: "1",
				name: "teste",
				description: "teste",
				idPoker: "1",
				createdAt: "1",
			},
			{
				id: "2",
				name: "teste2",
				description: "teste2",
				idPoker: "2",
				createdAt: "2",
			}
		]

		service.getStoriesFromPoker("1").subscribe(res => {
			expect(res).toEqual(mockData);
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/1/stories`);
		expect(req.request.method).toBe('GET');
		req.flush(mockData);
	})

	it(`${PokerService.prototype.addUser.name} should return id of deleted poker`, () => {
		const mockData = {
			id: "1"
		}

		const addUserTest: IAddUser = {
			idPoker: "1",
			email: "teste@teste"
		}

		service.addUser(addUserTest).subscribe(res => {
			expect(res).toEqual(mockData);
		})

		const req = httpTestingController.expectOne(`${service.baseUrl}/addUser`);
		expect(req.request.method).toBe('POST');
		req.flush(mockData);
	})

	afterEach(() => {
		httpTestingController.verify();
	});
})
