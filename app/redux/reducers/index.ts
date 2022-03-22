import { combineReducers } from "redux";
import counterReducer from "./couter.reducers";

export interface _AppState {
  counters: number
}

export const rootReducers = combineReducers<_AppState>({
  counters: counterReducer
});