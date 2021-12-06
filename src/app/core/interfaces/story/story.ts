export interface IRounds {
	id: string
	roundNumber: 1
	status: "Open" | "Closed"
	createdAt: string
	updatedAt: string
	idStory: string
	allPokerUsers: any[]
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