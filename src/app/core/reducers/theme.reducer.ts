import { Action, createReducer, on } from "@ngrx/store"

import { setTheme } from "../actions/theme.actions"

export interface State {
	theme: string
}

export const initialState: string = "light"

export const themeReducer = createReducer(
	initialState,
	on(setTheme, (state, action) => {
		return action?.theme ?? state
	})
)
