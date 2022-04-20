import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Topic from "../../modules/share/model/topic";
import TopicExercise from "../../modules/share/model/topicExercise";
import TopicProgress from "../../modules/share/model/topicProgress";
import { apiOffsetTopicsByParentId } from "./topic.api";

export type TopicItem = Topic & { topicProgress: TopicProgress; topicExercise: Pick<TopicExercise, "questionsNum" | "contentType" | "duration"> }

export type TopicState = {
  rootTopic: Topic;
  subTopic: TopicItem;
  currentTopic: TopicItem;
  loading: boolean;
  totalCurrent: number;
  totalSub: number;
  currentList: TopicItem[];
  subList: TopicItem[];
  currentIndex: number;
}

const initialState: TopicState = {
  rootTopic: null,
  subTopic: null,
  currentTopic: null,
  loading: true,
  totalCurrent: 0,
  totalSub: 0,
  currentList: [],
  subList: [],
  currentIndex: -1
}

const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    setRootTopic: (state, action: PayloadAction<Topic>) => {
      state.rootTopic = action.payload
    },
    setSubTopic: (state, action: PayloadAction<TopicItem>) => {
      state.subTopic = action.payload
    },
    setCurrentTopic: (state, action: PayloadAction<TopicItem>) => {
      state.currentTopic = action.payload;
    },
    setTopicLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setCurrentTopicIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
    setTopicList: (state, action: PayloadAction<{ data: TopicItem[]; target: "sub" | "current" }>) => {
      if (action.payload.target === "current") {
        state.currentList = action.payload.data;
      } else {
        state.subList = action.payload.data;
      }
    }
  }
});

export const {
  setRootTopic,
  setSubTopic,
  setCurrentTopic,
  setTopicLoading,
  setCurrentTopicIndex,
  setTopicList
} = topicSlice.actions;
export default topicSlice.reducer;
