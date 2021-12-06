export interface Poker {
	idPoker?: string
	name: string
	createdBy?: string
	createdByEmail?: string
	status?: "Open" | "Closed"
}

export interface IAddUser {
	idPoker?: string
	email: string
}

export interface playerPoker {
	name: string
	email: string
}

export interface IResponseGetPokerById {
	data: Poker
}
