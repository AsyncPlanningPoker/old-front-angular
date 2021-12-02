export interface Poker {
	id?: string
	idPoker?: string
	name: string
	createdBy?: string
	status?: "Open" | "Closed"
	players?: string[]
}

export interface IAddUser {
	idPoker?: string
	email: string
}

export interface playerPoker {
	name: string
	email: string
}
