import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Topic from "../../modules/share/model/topic";

export type TopicState = {
  rootTopic: Topic;
  subTopic: Topic;
  currentTopic: Topic;
  loading: boolean;
  totalCurrent: number;
  totalSub: number;
  currentList: Topic[];
  subList: Topic[];
}

const initialState: TopicState = {
  rootTopic: null,
  subTopic: null,
  currentTopic: null,
  loading: true,
  totalCurrent: 0,
  totalSub: 0,
  currentList: [],
  subList: []
}

// const fetchTopicsCount = createAsyncThunk("topic/fetchTopicsCount", async ()) 

const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    setRootTopic: (state, action: PayloadAction<Topic>) => {
      state.rootTopic = action.payload
    },
    setSubTopic: (state, action: PayloadAction<Topic>) => {
      state.subTopic = action.payload
    },
    setCurrentTopic: (state, action: PayloadAction<Topic>) => {
      state.currentTopic = action.payload
    },
    setTopicLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  },
  extraReducers: {

  }
});

export const {
  setRootTopic,
  setSubTopic,
  setCurrentTopic,
  setTopicLoading,

} = topicSlice.actions;
export default topicSlice.reducer;
