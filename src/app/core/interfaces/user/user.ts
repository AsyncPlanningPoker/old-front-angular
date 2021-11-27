export interface SignUp {
	nome: string
	email: string
	password: string
}

export interface Login {
	email: string
	password: string
}

export interface IResetPassword {
	token: string
	newPassword: string
}

export interface IAutoCompleteEmailPayload {
	partial: string
}
