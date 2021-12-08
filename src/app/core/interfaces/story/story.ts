export interface IRounds {
	id: string
	roundNumber: number
	status: "Open" | "Closed"
	createdAt: string
	updatedAt: string
	idStory: string
}

export interface IStory {
	id: string
	name: string
	description: string
	idPoker: string
	createdAt: string
	updatedAt: string
	allRounds: IRounds[]
}

export interface IResponseGetStoryById {
	data: IStory
}