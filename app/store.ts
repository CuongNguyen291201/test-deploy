import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { rootReducers, _AppState } from "./redux/reducers";


const reducer = (state: _AppState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    }
  }
  return rootReducers(state, action);
}

const store = configureStore<_AppState>({
  reducer,
  devTools: process.env.NODE_ENV !== "production"
});

const makeStore = () => {
  return store;
}

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<_AppState>(makeStore, { debug: false });
