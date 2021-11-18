export interface Poker {
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
