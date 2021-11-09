import { MetaReducer } from "@ngrx/store"
import { persistMetaReducer } from "./persist.reducer"

export const metaReducers: MetaReducer[] = [persistMetaReducer]
