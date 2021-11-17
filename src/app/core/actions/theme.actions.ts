import { createAction, props } from "@ngrx/store"

export const setTheme = createAction(
	"[NavBar Component] Set Theme",
	props<{ theme: string }>()
)
