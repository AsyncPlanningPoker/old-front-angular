import { ComponentFixture, TestBed } from "@angular/core/testing"
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms"
import { NotifierModule } from "angular-notifier"
import { GameModule } from "../game.module"

import { StoryVoteComponent } from "./story-vote.component"

describe("StoryVoteComponent", () => {
	let component: StoryVoteComponent
	let fixture: ComponentFixture<StoryVoteComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [StoryVoteComponent],
			imports: [ GameModule, NotifierModule ]
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(StoryVoteComponent)
		component = fixture.componentInstance

		component.round = {
			id: "string",
			roundNumber: 1,
			status: "Open",
			createdAt: "string",
			updatedAt: "string",
			idStory: "string",
		}
		fixture.detectChanges()
	})

	beforeAll(() => {
		localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZXVnZW5pbyIsImVtYWlsIjoiZXVnZW5pby5tYXJpYS52QGdtYWlsLmNvbSIsInVzZXJJZCI6IjhiNjkyZmMwLTExMjktNDY1ZS04NTY1LTMxYTliY2RhZTAxZiIsImlhdCI6MTYzNjc0MzkwNCwiZXhwIjo5OTk5OTk5OTk5fQ.QjN6AcFTkglczFhCINWyJT8RE2JrTo5tvsRXSdc3Zbk")
	})
	
	afterAll(() => {
		localStorage.clear()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
