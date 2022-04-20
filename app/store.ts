import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { rootReducers } from "./redux/reducers";
import { persistStore, persistReducer } from "redux-persist";
import localForage from "localforage";
import { getPersistConfig } from "redux-deep-persist";


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
  reducer: typeof window === "undefined" ? reducer : persistReducer(getPersistConfig({
    key: "root",
    storage: localForage,
    whitelist: ["topicState.subList", "topicState.currentList"],
    rootReducer: reducer
  }), reducer),
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    })
  }
});

export const persistor = persistStore(store);

const makeStore = () => {
  return store;
}

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore, { debug: false });
