import { combineReducers } from "redux";
import appInfoSlice, { AppInfoState } from "../../../features/appInfo/appInfo.slice";
import topicSlice, { TopicState } from "../../../features/study/topic.slice";
import counterReducer from "./couter.reducers";

export interface _AppState {
  counters: number;
  appInfos: AppInfoState;
  topicState: TopicState;
}

export const rootReducers = combineReducers<_AppState>({
  counters: counterReducer,
  appInfos: appInfoSlice,
  topicState: topicSlice
});