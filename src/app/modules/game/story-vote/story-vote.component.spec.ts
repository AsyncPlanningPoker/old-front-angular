import { ComponentFixture, TestBed } from "@angular/core/testing"

import { StoryVoteComponent } from "./story-vote.component"

describe("VoteComponent", () => {
	let component: StoryVoteComponent
	let fixture: ComponentFixture<StoryVoteComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [StoryVoteComponent]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(StoryVoteComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
