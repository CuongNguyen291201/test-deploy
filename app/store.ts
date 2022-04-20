import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { rootReducers } from "./redux/reducers";


const reducer = (state: ReturnType<typeof rootReducers>, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    }
  }
  return rootReducers(state, action);
}

const store: EnhancedStore<ReturnType<typeof rootReducers>, any> = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    })
  }
});

const makeStore = () => {
  return store;
}

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore, { debug: false });
