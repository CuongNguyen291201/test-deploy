import { combineReducers } from "redux";
import appInfoSlice from "../../../features/appInfo/appInfo.slice";
import authSlice from "../../../features/auth/auth.slice";
import topicSlice from "../../../features/study/topic.slice";
import counterReducer from "./couter.reducers";

export const rootReducers = combineReducers({
  counters: counterReducer,
  appInfos: appInfoSlice,
  topicState: topicSlice,
  authState: authSlice
});