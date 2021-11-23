import { ActionReducer, INIT, UPDATE } from "@ngrx/store"

export const persistMetaReducer = (
	reducer: ActionReducer<any>
): ActionReducer<any> => {
	return (state, action) => {
		if (action.type === INIT || action.type === UPDATE) {
			const storageValue = localStorage.getItem("@planningPoker:state")
			console.log(storageValue)
			console.log(localStorage.getItem("state"))

			if (storageValue) {
				try {
					return JSON.parse(storageValue)
				} catch {
					localStorage.removeItem("@planningPoker:state")
				}
			}
		}
		const nextState = reducer(state, action)
		localStorage.setItem("@planningPoker:state", JSON.stringify(nextState))
		return nextState
	}
}
